function ordA(a) {
   return a.charCodeAt(0) - 65;
}

function vigenere(text, key, decode) {
   var i = 0,
      b;
   key = key.toUpperCase().replace(/[^A-Z]/g, '');
   return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function (a) {
      b = key[i++ % key.length];
      return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
   });
}

/*
____function call___
1st argument => the text to be either encode or decode
2nd argument => the keyword that the cipher is based on
3rd argument => true(decode) or false(encode) only
*/
console.log(vigenere(process.argv[2], process.argv[3], process.argv[4]));