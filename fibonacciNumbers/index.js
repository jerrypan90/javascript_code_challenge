var memory = [];

function fibonacci(n) {
   if (n === 0) return 0;
   if (n === 1) return 1;
   // search through the stored array if present
   if (n in memory) return memory[n];

   // computing the fibonacci number based on the previous 2 numbers
   var value = fibonacci(n - 2) + fibonacci(n - 1);

   // storing the value in an array (trading space for time)
   memory[n] = value;

   return value;
}

// function call
console.log(fibonacci(process.argv[2]));