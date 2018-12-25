let J = "aA"
let S = "aAAbbbb"

/**

Input: J = "aA", S = "aAAbbbb"
Output: 3

 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function (J, S) {

    let count = 0;

    for (let i = 0; i < S.length; i++) {
        let currChar = S[i];
        if (currChar, J.includes(currChar)) {
            count++;
        }
    }

    return count;

};

console.log(numJewelsInStones(J, S));