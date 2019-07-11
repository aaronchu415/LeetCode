// _NAME: Palindrome Partitioning
// _LINK: https://leetcode.com/problems/palindrome-partitioning/
// _CATEGORY: String

/**
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {

  let memo = createMemo(s)

  let output = []

  for (let j = 0; j < memo[0].length; j++) {

    if (!memo[0][j]) continue

    if (memo[0][j]['isPal']) {
      output.push(...createList(memo, 0, j))
    }
  }


  return output
};

var createList = function (memo, i, j) {

  let output = []

  function helper(currLine, row) {

    if (row >= memo.length) {
      output.push(currLine)
      return
    }

    for (let k = 0; k < memo[row].length; k++) {
      if (!memo[row][k]) continue
      if (memo[row][k]['isPal']) {
        let nextLine = [...currLine, memo[row][k]['string']]
        helper(nextLine, k + 1)
      }
    }

  }

  helper([memo[i][j]['string']], j + 1)

  return output

}

var createMemo = function (s) {
  let output = []

  for (let i = 0; i < s.length; i++) {
    let row = []
    for (let j = 0; j < s.length; j++) {
      if (j < i) {
        row.push(null)
        continue
      }
      let obj = {}
      let subS = s.substring(i, j + 1)
      obj['string'] = subS
      obj['isPal'] = isPalindrome(subS)
      row.push(obj)

    }
    output.push(row)
  }
  return output
}

var isPalindrome = function (s) {

  if (s.length === 0) return false

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false
    i++
    j--
  }

  return true
}
