function count(array) {
  let highestSum;
  let yArray = [0, 1, 2];
  let xArray = [0, 1, 2];

  // Loop 16x
  for (let x = 0; x < 16; x++) {
    let currentSum = 0;

    if (x === 4 || x === 8 || x === 12) {
      // Increment yArray for every 4th iteration
      yArray = yArray.map(num => num + 1);
      // Reset xArray for every 4th iteration
      xArray = [0, 1, 2];
    }

    yArray.forEach((yIndex, index) => {
      const subValue = array[yIndex];
      if (index === 1) {
        // Middle Hourglass
        currentSum = currentSum + subValue[xArray[1]];
      } else {
        // Top & Bottom Hourglass
        xArray.forEach(xIndex => {
          currentSum = currentSum + subValue[xIndex];
        });
      }
    });

    // Set 1st sum or highest sum
    if (currentSum > highestSum || x === 0) highestSum = currentSum;

    console.log('currentSum>>', currentSum);

    // Increment xArray for each iteration
    xArray = xArray.map(num => num + 1);
  }

  console.log(highestSum);
  return highestSum;
}

const sample = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const negativeSample = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

// count(sample);
count(negativeSample);
