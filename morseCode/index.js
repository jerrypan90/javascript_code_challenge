// morse code legend
const morseCodeTable = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z'
}

function decodeMorse(morseCode) {
   //split up the input into an array
   var words = (morseCode).split('  ');
   var letters = words.map((w) => w.split(' '));
   // an array for the new decoded letters
   var decoded = [];

   for (var i = 0; i < letters.length; i++) {
      decoded[i] = [];
      for (var x = 0; x < letters[i].length; x++) {
         if (morseCodeTable[letters[i][x]]) {
            // push the relevant letters into the decoded array
            decoded[i].push(morseCodeTable[letters[i][x]]);
         }
      };
   };
   return decoded.map(arr => arr.join('')).join(' ');
};

// function call (input morse code here)
console.log(decodeMorse(process.argv[2]));