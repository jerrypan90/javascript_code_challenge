function LongestWord(sen) {
   let newSenArray = [];

   // split the argument into array of words
   senArray = sen.split(" ");

   // remove symbols from the array of words
   for (let i = 0; i < senArray.length; i++) {
      indiSen = senArray[i].replace(/[^0-9a-z]/gi, '');
      newSenArray.push(indiSen)
   }

   // find the first longest word in the array
   let longestSen = newSenArray.reduce(function (a, b) {
      return a.length >= b.length ? a : b
   }, '');
   return longestSen;
}

// function call (change the words within the quote to test function. Hint: include symbols in the words)
LongestWord("argument goes here");