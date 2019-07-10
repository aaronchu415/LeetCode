// _NAME: Text Justification
// _LINK: https://leetcode.com/problems/text-justification/
// _CATEGORY: Array

/**
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

  let count = 0

  let output = []
  let currLine = []

  for (let w of words) {
    let currLen = w.length

    //add the current words length to the count
    count += currLen;

    //if it is over then we want to append currLine to output
    //reset the count
    let OVER_MAX_WIDTH = (count + currLine.length - 1) >= maxWidth ? true : false

    if (OVER_MAX_WIDTH) {
      output.push(currLine)
      count = currLen;
      currLine = [w];
      //add the word to the currLine
    } else {
      currLine.push(w)
    }
  }


  let o = output.map((line, i) => {
    return formatWords(line, maxWidth)
  })

  if (currLine.length > 0) {

    let numLetters = currLine.reduce((acc, word) => {
      acc = acc + word.length
      return acc
    }, 0)

    let blanksLeft = (maxWidth - (numLetters + (currLine.length - 1)))
    let s = currLine.join(' ')
    if (blanksLeft > 0) {
      s = s + ' '.repeat(blanksLeft)
    }
    o.push(s)
  }

  return o

};

var formatWords = function (words, maxWidth) {

  if (words.length === 1) return words[0] + ' '.repeat((maxWidth - words[0].length))


  let numLetters = words.reduce((acc, word) => {
    acc = acc + word.length
    return acc
  }, 0)

  let spacingPerWord = Math.floor((maxWidth - numLetters) / (words.length - 1))
  let spacingRemaining = (maxWidth - numLetters) % (words.length - 1)


  let output = []

  for (let i = 0; i < words.length; i++) {
    output.push(words[i])

    if (i === words.length - 1) continue

    for (let i = 0; i < spacingPerWord; i++) {
      output.push(' ')
    }

    if (spacingRemaining > 0) {
      output.push(' ')
      spacingRemaining--
    }

  }

  return output.join('')

}
