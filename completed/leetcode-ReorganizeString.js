// _NAME: Reorganize String
// _LINK: https://leetcode.com/problems/reorganize-string/
// _CATEGORY: String

/**
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Input: S = "aab"
Output: "aba"

/**
 * @param {string} S
 * @return {string}
 */

let input = "bbbbaaaaa"
var reorganizeString = function (S) {
  let memo = {}
  return helper(memo, '', S)

};

var helper = function (memo, output, subString) {

  console.log(memo, output, subString)
  //console.log(output, subString)

  //if we get down and subString is empy then we can return output
  if (subString === '') {
    return output
  }

  //loop through each possible character in the substring
  for (let i = 0; i < subString.length; i++) {
    let ch = subString.charAt(i)

    //if character is not equal to the last ch in the output
    //then we can add it to the output and recurse down to try to find a solution

    //if the branch does not work (if we get through the entire substring and cant find a way to concat) then it will return ''
    //if answer is not '' then we just return it up the recursion stack
    //if it is '' then we will explore other branches

    if (ch !== output.charAt(output.length - 1)) {

      let answer

      //if we have already computed this branch (same currentOutput and same substring) then just look up answer
      if (memo[[output.concat(ch), removeCharAtIndexFromString(subString, i)]]) {
        answer = memo[[output.concat(ch), removeCharAtIndexFromString(subString, i)]]

        //else compute answer and store 
      } else {
        answer = helper(memo, output.concat(ch), removeCharAtIndexFromString(subString, i))
        memo[[output.concat(ch), removeCharAtIndexFromString(subString, i)]] = answer

      }

      //if answer is blank then we continue on
      //if answer is not blank then we return up the recursion stack
      if (answer !== '') return answer

    }

  }

  //if current or all branch does not work then we return ''
  return ''


}

var removeCharAtIndexFromString = function (s1, index) {
  return s1.substring(0, index) + s1.substring(index + 1, s1.length)
}

console.log(reorganizeString(input));
