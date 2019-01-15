// _NAME: House Robber
// _LINK: https://leetcode.com/problems/house-robber/
// _CATEGORY: Array-Integer

/**
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is 
that adjacent houses have security system connected and it will 
automatically contact the police if two adjacent houses were broken 
into on the same night.

Given a list of non-negative integers representing the amount of money 
of each house, determine the maximum amount of money you can rob tonight 
without alerting the police.

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.



Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
/**
 * @param {number[]} nums
 * @return {number}
 */

let input = [4, 1, 1, 4];

// //let input = [
//   104,
//   209,
//   137,
//   52,
//   158,
//   67,
//   213,
//   86,
//   141,
//   110,
//   151,
//   127,
//   238,
//   147,
//   169,
//   138,
//   240,
//   185,
//   246,
//   225,
//   147,
//   203,
//   83,
//   83,
//   131,
//   227,
//   54,
//   78,
//   165,
//   180,
//   214,
//   151,
//   111,
//   161,
//   233,
//   147,
//   124,
//   143
// ];

var rob = function(h) {
  let total = [0];
  helper("", total, 0, h, 0, true);
  return total[0];
};

var helper = function(
  s,
  total,
  currTotal,
  houses,
  indexOfCurrHouse,
  canRobNextHouse
) {
  //console.log(s, total, currTotal, houses, indexOfCurrHouse, canRobNextHouse);

  if (indexOfCurrHouse > houses.length - 1) {
    if (currTotal > total[0]) {
      total[0] = currTotal;
    }
    return;
  }

  s += " ";
  //take money
  if (canRobNextHouse) {
    helper(
      s,
      total,
      currTotal + houses[indexOfCurrHouse],
      houses,
      indexOfCurrHouse + 1,
      false
    );
  }

  //dont take money
  helper(s, total, currTotal, houses, indexOfCurrHouse + 1, true);
};

console.log(rob(input));
