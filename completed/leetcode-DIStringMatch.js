// _NAME: DI String Match
// _LINK: https://leetcode.com/problems/di-string-match/
// _CATEGORY: Array-Integer

/**
Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]

Input: "IDID"
Output: [0,4,1,3,2]

/**
 * @param {string} S
 * @return {number[]}
 */

let input = "IDID"

var diStringMatch = function (S) {

  //if empty string then return empty array
  if (S === '') return []


  let output = []
  //keep track of the highest and lowest number
  let highest = S.length
  let lowest = 0

  //loop through letters
  for (let i = 0; i < S.length; i++) {

    //if we see a D then we know that everything after it has to be smaller
    //thus we push the highest number we current have.
    if (S.charAt(i) === 'D') {
      output.push(highest)
      highest--
    }

    //if we see an I then we know that everything after it has to be larger
    //thus we push the lowest number we current have.
    if (S.charAt(i) === 'I') {
      output.push(lowest)
      lowest++
    }
  }

  //lastly we just add 1 more number and we done
  if (S.charAt(S.length - 1) === 'D') {
    output.push(highest)
  }

  if (S.charAt(S.length - 1) === 'I') {
    output.push(lowest)
  }

  return output

};

console.log(diStringMatch(input));
