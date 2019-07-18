// _NAME: String Compression (1.6)
// _LINK: http://www.crackingthecodinginterview.com/
// _CATEGORY: CTCI

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

  let output = []
  let count = 1;
  let ltr = chars[0]

  for (let i = 1; i < chars.length; i++) {
    let currChar = chars[i]
    //if it is the same then count goes up
    if (currChar === ltr) count++
    else {
      //append
      if (count > 1) {
        output.push(ltr)
        let countS = count.toString()
        let countA = [...countS]
        for (let j = 0; j < countA.length; j++) {
          output.push(countA[j])
        }
      } else {
        output.push(ltr)
      }

      //reset
      count = 1;
      ltr = currChar
    }
  }
  if (count > 0) {
    if (count > 1) {
      output.push(ltr)
      let countS = count.toString()
      let countA = [...countS]
      for (let j = 0; j < countA.length; j++) {
        output.push(countA[j])
      }
    }
    else {
      output.push(ltr)
    }
  }

  if (output.length <= chars.length) {
    chars.length = output.length;
    for (let i = 0; i < output.length; i++) {
      chars[i] = output[i]
    }
  }
  return chars.length
};
