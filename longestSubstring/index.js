function lengthOfLongestSubstring(string) {
  const cache = {};
  let highestCount = 0;
  let start = 0;

  // loop through the string once
  for (let x = 0; x < string.length; x++) {
    const cacheValue = cache[string[x]];

    // alphabet is in cache 
    if (cacheValue !== undefined && cacheValue >= start) {
      // record the highest streak
      highestCount = Math.max(x - start, highestCount);
      // record the new start index
      start = cacheValue + 1;
    }

    cache[string[x]] = x;
  }

  return Math.max(string.length - start, highestCount);
}

const response = lengthOfLongestSubstring("abrkaabcdefghijjxxx");
console.log('count>>', response);
