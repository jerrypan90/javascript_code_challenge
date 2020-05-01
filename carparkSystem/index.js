const carpark = {};
const floorMaxCapacity = 10;
const carparkMaxFloor = 5;
const carparkFull = 'Carpark is Full';

const formulateCarpark = () => {
  for (let x = 1; x <= carparkMaxFloor; x++) {
    carpark[x.toString()] = [];
  }
};

const findEmptySlot = (array) => {
  let lotNumber;
  const index = array.findIndex(lot => lot === '');
  if (index && index !== -1) {
    lotNumber = index + 1;
  } else {
    if (array.length < floorMaxCapacity) {
      lotNumber = array.length + 1;
    }
  }
  return lotNumber;
};

const findEmptyAcrossFloors = (array) => {
  let result;
  for (let x = 0; x < array.length; x++) {
    const lotNumber = findEmptySlot(carpark[array[x]]);
    if (lotNumber) {
      result = {
        floor: array[x],
        lotNumber,
      }
      break;
    }
  }
  return result;
};

const parkCar = (obj, key, lotNumber, carplate) => {
  obj[key][lotNumber - 1] = carplate;
};

const findCarAcrossFloor = (carplate) => {
  const floors = Object.keys(carpark);
  let result;

  for (let x = 0; x < floors.length; x++) {
    const floorNumber = x + 1;
    const floor = floorNumber.toString();
    const index = carpark[floor].findIndex(plate => plate === carplate);
    if (index && index !== -1) {
      result = {
        index,
        floor,
      }
      break;
    }
  }
  return result;
};

const removeCar = (obj, key, index) => {
  obj[key][index] = '';
}

const entry = (carplate) => {
  const listOfFloors = Object.keys(carpark);
  const result = findEmptyAcrossFloors(listOfFloors);
  let response;

  if (result) {
    const { floor, lotNumber } = result;
    parkCar(carpark, floor, lotNumber, carplate);
    response = result;
  } else {
    response = carparkFull;
  }
  console.log('entry-res>>', response);
  return response;
};

const exit = (carplate) => {
  const result = findCarAcrossFloor(carplate);
  let response;

  if (result) {
    const { index, floor } = result;
    removeCar(carpark, floor, index);
    response = `${carplate} exited successfully`;
  }
  console.log('exit-res>>', response);
  return response;
};

const simulateCarFlow = (initialNumOfCarsEntered, numOfCarsExit, nextNumOfCarsEntered) => {
  // check that car exited cannot be more than car entered
  if (numOfCarsExit > initialNumOfCarsEntered) numOfCarsExit = initialNumOfCarsEntered;

  // Initialise Carpark
  formulateCarpark();

  // Initial entry of cars
  const generateCarEntry = (numOfCars, carplateTemplate) => {
    for (let x = 1; x <= numOfCars; x++) {
      const carplate = carplateTemplate + x;
      entry(carplate);
    }
  }
  let baseCarplate = 'abc';
  generateCarEntry(initialNumOfCarsEntered, baseCarplate);

  // Randomise the exiting of cars
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const maxCapacity = floorMaxCapacity * carparkMaxFloor;
  const minCar = 1;
  const maxCar = initialNumOfCarsEntered > maxCapacity ? maxCapacity : initialNumOfCarsEntered;
  const carsExited = [];
  
  for (let x = 1; x <= numOfCarsExit; x++) {
    let duplicateStatus = true;

    while (duplicateStatus) {
      const randomCar = getRandomInt(minCar, maxCar);
      if (!carsExited.includes(randomCar)) {
        carsExited.push(randomCar);
        duplicateStatus = false;
      }
    }
  }

  carsExited.forEach(num => {
    const carplateNum = baseCarplate + num;
    exit(carplateNum);
  });

  // Second wave of cars entering
  baseCarplate = 'xyz';
  generateCarEntry(nextNumOfCarsEntered, baseCarplate);
}

simulateCarFlow(50, 10, 11);
console.log('carpark>>', carpark);
