function LetterChanges(str) {
   // to return the next letter based on the current charCode and a manual method is used to change 'z' to 'a'
   let converted = str.replace(/[a-z]/gi, function (char) {
      return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
   });

   // to identify capitalise the vowel in the converted string
   let capitalized = converted.replace(/a|e|i|o|u/gi, function (vowel) {
      return vowel.toUpperCase();
   });

   // return the final string
   return capitalized;
}

// function call
console.log(LetterChanges("gdkkn Vnqkc!"));