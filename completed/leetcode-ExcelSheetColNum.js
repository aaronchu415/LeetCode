// _NAME: Excel Sheet Column Number
// _LINK: https://leetcode.com/problems/excel-sheet-column-number/
// _CATEGORY:

/**

Given a column title as appear in an Excel sheet, return its corresponding column number.

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

Input: "A"
Output: 1

Input: "AB"
Output: 28

Input: "ZY"
Output: 701
/**
 * @param {string} s
 * @return {number}
 */

let input = "AAA";

var titleToNumber = function(s) {
  let cArray = s.split("");

  let output = 0;

  //formula Sum Of 26^(posOfElement) * charCode for posOfElement from len-1 to 0
  //ex AA -> ( 26^(1) * 1 ) + ( 26^(0) * 1 )
  //ex BA -> ( 26^(1) * 2 ) + ( 26^(0) * 1 )
  //ex ZY -> ( 26^(1) * 26 ) + ( 26^(0) * 25 )
  //ex AAA -> ( 26^(2) * 1 ) + ( 26^(1) * 1 ) + ( 26^(0) * 1 )

  for (let i = 0; i < cArray.length; i++) {
    let posOfElement = cArray.length - i - 1;
    let code = cArray[i].charCodeAt() - 64;

    let formulaOutput = Math.pow(26, posOfElement) * code;

    output += formulaOutput;
  }

  return output;
};

console.log(titleToNumber(input));
