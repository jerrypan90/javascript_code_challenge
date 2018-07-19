function SimpleAdding(num) {
   // SimpleAdding function will keep running until num is 1
   if (num != 1) {
      return num + SimpleAdding(num - 1);
   } else {
      return num;
   }
}

//function call
SimpleAdding(4);