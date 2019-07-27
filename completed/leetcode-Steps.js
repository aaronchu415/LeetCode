// _NAME: Steps
// _LINK: https://leetcode.com/problems/3sum/
// _CATEGORY: Array

function steps(badStep, n) {

  let output = 0;
  let memo = {};

  function _jump(currStep, position) {

    if (position === badStep) return;
    if (currStep > n) {
      output = Math.max(output, position);
      return;
    }

    if (memo[`${currStep}-${position}`]) {
      return;
    }

    //take the step
    _jump(currStep + 1, position + currStep);
    memo[`${currStep + 1}-${position + currStep}`] = 'DONE';
    //dont take the step
    _jump(currStep + 1, position);
    memo[`${currStep + 1}-${position}`] = 'DONE';

  }

  _jump(0, 0, memo);

  return output;

}

function twoD(badStep, n) {

  let memo = [[]];

  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      memo.push([true, true]);
      continue;
    }

    //do not take current step
    let lastArr = memo[i - 1];
    let currArr = [];
    for (let j = 0; j < lastArr.length; j++) {
      if (lastArr[j] && j !== badStep) {
        currArr[j] = true;
      }
    }

    //take the step
    for (let j = 0; j < lastArr.length; j++) {
      if (lastArr[j]) {
        if ((j) !== badStep) currArr[j + i] = true;
      }
    }

    memo.push(currArr);

  }

  // console.log(memo);

  return memo[memo.length - 1].length - 1;

}

console.log(twoD(1, 2));
console.log(twoD(3, 3));
console.log(twoD(2, 2));
