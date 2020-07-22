const jumbleSentence = function (sentence) {
  return sentence.split(' ').map((word) => {
    const capitalPostion = [];
    const symbolPosition = [];

    // find the position of capital and symbol in each word
    for (var i = 0; i < word.length; i++) {
      if (word[i].match(/[A-Z]/) != null) {
        capitalPostion.push(i);
      }
      if (word[i].match(/[A-Za-z]/) === null) {
        symbolPosition.push(i);
      }
    }

    // split word to array
    word = word.toLowerCase().split('');

    if (symbolPosition.length > 0) {
      let symbolArray = [];
      // remove symbol
      symbolPosition.forEach((i) => {
        symbolArray = symbolArray.concat(word.splice(i, 1));
      });
      word = word.sort();
      // add symbol back to origin index position
      symbolPosition.forEach((i, index) => {
        word.splice(i, 0, symbolArray[index]);
      });
    } else {
      word = word.sort();
    }

    if (capitalPostion.length > 0) {
      word = word.map((w, index) => {
        return capitalPostion.find(el => el === index) !== undefined ?
          w.toUpperCase() :
          w.toLowerCase();
      });
    }

    return word.join('');
  }).join(' ');
};

const response = jumbleSentence('The cat sat on the Ikea mat.');
const answer = 'Eht act ast no eht Aeik amt.';

console.log(response === answer);
