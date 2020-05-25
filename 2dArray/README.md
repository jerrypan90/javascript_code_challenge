# Find the hourglass in a 2D Arrays

## Objective
Create a function to calculate the hourglass sum for every hourglass in the 2D Array and return the maximum hourglass sum.

## Context
Given a 6 x 6 2D Array:
```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

An hourglass is defined in the following format:
```
a b c
  d
e f g
```

There are *16* hourglasses in a 6 x 6 2D Arrays. The sum of hourglass is the sum of the total value that makes up the hourglass body.

## Sample Input
```
const posSample = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

// 2 + 4 + 4 + 2 + 1 + 2 + 4
// return value is 19

const negativeSample = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

// -1 + -1 + 0 + -1 + -1 + -1 + -1
// return value is -6
```

## Steps to run this application
Step 1: `node index.js` from the command line

## Bulit With
- [Javascript](https://www.javascript.com/) Language

## Author
- [Jerry Pan](www.jerryplx.com)
