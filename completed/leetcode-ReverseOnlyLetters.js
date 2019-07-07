// _NAME: Reverse Only Letters
// _LINK: https://leetcode.com/problems/3sum/
// _CATEGORY: String

/**
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {

  let letterArr = [...S.replace(/[^a-zA-Z]+/g, "")]

  let k = letterArr.length - 1;
  let output = []

  for (let i = 0; i < S.length; i++) {
    if (S[i].toLowerCase().charCodeAt() >= 97 && S[i].toLowerCase().charCodeAt() <= 122) {
      output.push(letterArr[k])
      k--
    } else {
      output.push(S[i])
    }
  }

  return output.join('')

};
