// _NAME: Letter Combinations of a Phone Number
// _LINK: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// _CATEGORY: Array

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

  if (digits === '') return []

  let LOOKUP = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  digits = [...digits]

  let output = []

  function helper(index, combo, pointers) {

    if (index === digits.length) {
      output.push(combo)
      return
    }

    let letters = LOOKUP[digits[index]]
    let start = pointers[index]

    for (let i = start; i < letters.length; i++) {

      let l = letters[i]
      let newPointer = [...pointers]
      newPointer[index]++
      let newCombo = combo.concat(l)

      helper(index + 1, newCombo, newPointer)
    }
  }

  let pointers = digits.map(d => 0)

  helper(0, '', pointers)

  return output




};
