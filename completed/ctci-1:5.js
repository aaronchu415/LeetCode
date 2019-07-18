// _NAME: One Away (1.5)
// _LINK: http://www.crackingthecodinginterview.com/
// _CATEGORY: CTCI

function isSwapped(s1, s2) {

  let m = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) m++;
  }
  return m <= 1;

}

function isInsert(s1, s2) {

  let i = 0;
  let j = 0;
  let m = 0;

  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      i++;
      m++;
    } else {
      i++;
      j++;
    }
  }

  return m <= 1;

}

function oneAway(s1, s2) {

  if (s1.length - s2.length > 1) return false;
  if (s1.length === s2.length) return isSwapped(s1, s2);

  let s1c = s1.length > s2.length ? s1 : s2;
  let s2c = s1.length > s2.length ? s2 : s1;

  return isInsert(s1c, s2c);
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'));
