// _NAME: Coin Change
// _LINK: https://leetcode.com/problems/coin-change/
// _CATEGORY: Array

/**

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

  coins.sort((a, b) => a - b)

  if (amount === 0) return 0

  let memo = []

  //set up memo
  for (let i = 0; i < coins.length; i++) {
    let row = new Array(amount + 1);
    row[0] = coins[i]
    memo.push(row)
  }


  //update
  for (let r = 0; r < memo.length; r++) {
    let row = memo[r]
    let curr_coin = row[0]

    for (let j = 1; j < row.length; j++) {

      //if value is less than coin
      if (j < curr_coin) {
        //if first row and j is less than coin then its all false
        if (r === 0) row[j] = false
        //if not first row then its just the cell above
        else row[j] = memo[r - 1][j]
      }
      //if same value then its just 1 coin
      else if (j === curr_coin) {
        row[j] = 1
      }
      //for value greater than coin
      else {
        let diff = j - curr_coin
        //look up diff
        let lowest = row[diff];
        if (lowest !== false) {
          let amount = lowest + 1;
          if (r === 0) row[j] = amount
          else {
            let top = memo[r - 1][j]
            if (top) {
              row[j] = Math.min(top, amount)
            } else {
              row[j] = amount
            }
          }

        } else {
          if (r === 0) row[j] = false
          else row[j] = memo[r - 1][j]
        }

      }

    }
  }

  // console.log(memo)
  let answer = memo[memo.length - 1][memo[memo.length - 1].length - 1]
  return answer === false ? -1 : answer

};
