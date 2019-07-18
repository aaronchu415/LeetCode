// _NAME: Palindrome Permutation (1.4)
// _LINK: http://www.crackingthecodinginterview.com/
// _CATEGORY: CTCI

function convertToFC(s) {
  return [...s].reduce((acc, v) => {
    if (v === ' ') return acc;
    if (acc[v]) acc[v]++;
    else acc[v] = 1;
    return acc;
  }, {});
}

function palinPermCheck(s) {
  s = s.toLowerCase();
  let fc = convertToFC(s);
  let odds = 0;

  for (let v of Object.values(fc)) {
    if (v % 2 !== 0) odds++;
  }
  return odds <= 1;
}

console.log(palinPermCheck('Tact Coa'));
