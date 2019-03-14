// _NAME: Find Common Characters
// _LINK: https://leetcode.com/problems/find-common-characters/
// _CATEGORY: String

/**
 Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Input: ["bella","label","roller"]
Output: ["e","l","l"]


/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let combined = A.join('')

  let output = []

  for (let i = 0; i < combined.length; i++) {

    let inAllWords = true
    for (let j = 0; j < A.length; j++) {
      let word = A[j]
      if (word.indexOf(combined[i]) === -1) {
        inAllWords = false
      }
    }

    if (inAllWords) {
      output.push(combined[i])
      for (let k = 0; k < A.length; k++) {
        let word = A[k]
        let newWord = word.replace(combined[i], '');
        A[k] = newWord

      }
    }
  }

  return output


};

console.log(commonChars(["bella", "label", "roller"]));
