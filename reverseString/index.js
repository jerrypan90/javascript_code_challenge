function reverseString(str) {
   // if str is exhuasted from substr(), recursion will ends
   // str.substr(1) will keep removing the first letter until nil
   // str.charAt(0) will keep adding the first letter to a new string
   return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

// function call
console.log(reverseString("hello"));