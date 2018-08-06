// to count the number of steps before reaching Kaprekar condition
let times = 0;

// sort digit in an integer in ascending order
function smallToBig(a, b) {
   return a - b;
}

// sort digit in an integer in descending order
function bigToSmall(a, b) {
   return b - a;
}

function KaprekarsConstant(num) {
   // convert num into an array of single digit
   let arr = num.toString().split('').map(Number);
   // Kaprekar condition
   if (num != 6174) {
      // descending order integer value to substract ascending order interger value
      let newNum = arr.sort(bigToSmall).join('') - arr.sort(smallToBig).join('');
      // increase counter
      times++;
      // to add zero to make integer to be equal to 4 digits
      while (newNum.toString().length < 4) {
         newNum = newNum * 10;
      }
      // recursion until Kaprekar condition is met
      KaprekarsConstant(newNum);
   }
   // the number of steps required to reach Kaprekar condition
   return times;
}

// function call: insert only 4 digit integers
KaprekarsConstant(2111);