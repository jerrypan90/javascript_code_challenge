// sample list to conduct binary search on
const nameList = [
   'Aaron',
   'Andy',
   'Batman',
   'Betsy',
   'Boba',
   'Bonnie',
   'Clarence',
   'Daisy',
   'Elektra',
   'Flash'
];

binarySearch = (list, value) => {
   let guess;
   min = 0;
   max = list.length - 1;

   while (min <= max) {
      // to always find the value at the mid of list
      guess = Math.floor((min + max) / 2);

      if (list[guess] === value) {
         console.log("Matched! String is found at array " + guess);
         break;
      } else if (min === max) {
         console.log("String not found!");
         break;
      } else if (list[guess] < value) {
         min = guess + 1;
         continue;
      } else {
         max = guess - 1;
         continue;
      }
   };
};

// function call (list => the list you want to search in; value => the argument you want to find within the list)
console.log(binarySearch(nameList, process.argv[2]));