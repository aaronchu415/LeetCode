// _NAME: Remove All Adjacent Duplicates In String
// _LINK: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// _CATEGORY: String

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {

  function removedups(str) {

    let s = []
    for (let l of str) {
      if (s.length === 0) s.push(l)
      else {
        if (s[s.length - 1] !== l) s.push(l)
        else s.pop()
      }
    }

    return s.join('')
  }

  return removedups(S)
};
