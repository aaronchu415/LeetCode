// _NAME: Plus One
// _LINK: https://leetcode.com/problems/plus-one/
// _CATEGORY: Array-Integer

/**
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.


/**
 * @param {number[]} digits
 * @return {number[]}
 */

let input = [1, 2, 3]

var plusOne = function (digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
    let currDigit = digits[i]

    //if digit is not a 9 then we can just add 1 and be done
    if (digits[i] !== 9) {
      digits[i]++
      break
      //if digit is a 9 then we need to turn this into a zero and try to add 1 to           
      // the next number (if it is a 9 then we repeat)   
    } else {
      digits[i] = 0
    }

    //if we get all the way to the front and it is a 9 
    //then we need to set this to a 1 and add a zero to the end 
    if (currDigit === 9 && i === 0) {
      digits[i] = 1
      digits.push(0)

    }
  }

  return digits

};

console.log(plusOne(input));
