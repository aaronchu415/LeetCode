// _NAME: Pascal's Triangle
// _LINK: https://leetcode.com/problems/pascals-triangle/
// _CATEGORY: Iterative

/**

Given a non-negative integer numRows, generate the first 
numRows of Pascal's triangle.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

/**
 * @param {number} numRows
 * @return {number[][]}
 */

let input = 5;

var generate = function(numRows) {
  let currRow = 1;

  let output = [];

  //while current row is less than or equal to the number of rows we need to print
  while (currRow <= numRows) {
    let currArr = [];

    //creat each row and append to array
    for (let i = 1; i <= currRow; i++) {
      //if current index is 1 than just append one
      //if current index is last then just append 1
      if (i === 1) {
        currArr.push(1);
      } else if (i === currRow) {
        currArr.push(1);
        //else compute number
      } else {
        //minus extra one because we are starting i at 1 instead of 0
        //target the previousRow
        let prevRow = output[currRow - 1 - 1];

        //minus extra one because we are starting i at 1 instead of 0
        //its previous rows same position and position + 1
        let num = prevRow[i - 1 - 1] + prevRow[i - 1];
        currArr.push(num);
      }
    }

    //add current array we created
    output.push(currArr);
    //incrent by 1
    currRow++;
  }

  return output;
};

console.log(generate(input));
