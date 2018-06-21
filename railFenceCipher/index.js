function encodeRFC (input) {
   // split input into an array
   let input_array = input.split('');

   // encode first level
   let top_array = input_array.filter((_, i) => i % 4 === 0);

   // encode second level
   let middle_array = input_array.filter((_, i) => i % 2 != 0);

   // encode third level
   bottom_array = (word) => {
      word.splice(0, 2);
      let bottom_array = word.filter((_, i) => i % 4 === 0);
      return bottom_array;
   };
   let bottom = bottom_array(input_array);

   // concat encoded first, second and third level
   let encode = top_array.concat(middle_array, bottom);

   return encode.join(""); 
}

// function call
console.log(encodeRFC(process.argv[2]));