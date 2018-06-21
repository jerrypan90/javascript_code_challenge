function FirstFactorial(num) {
   let array = [];
   let sum = 1;

   // create the array based on num
   while (num !== 0) {
      array.push(num);
      num = num - 1;
   }

   // return the multiplied sum of the array of numbers
   for (let i = 0; i < array.length; i++) {
      sum = sum * array[i];
   }
   return sum;
}

// function call (change the numbere here to test with different arguments)
FirstFactorial(4);