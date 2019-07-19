// _NAME: The Look-And-Say Problem (6.7)
// _LINK: https://elementsofprogramminginterviews.com/
// _CATEGORY: EPI

function helper(string) {
  let sArr = [...string];
  let output = '';

  let c = 1;

  for (let i = 0; i < sArr.length - 1; i++) {
    let currN = sArr[i];
    let nextN = sArr[i + 1];

    if (currN !== nextN) {
      //append to output
      output = output + `${c}${currN}`;
      c = 1;
      //else they are the same
    } else {
      c++;
    }
  }
  //handle last number
  output = output + `${c}${sArr[sArr.length - 1]}`;
  return output;

}

function lookandsay(n) {

  let output = ['1'];

  while (output.length !== n) {
    output.push(helper(output[output.length - 1]));
  }

  return output[n - 1];
}

console.log(lookandsay(8));
