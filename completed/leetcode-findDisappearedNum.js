/**
 * @param {number[]} nums
 * @return {number[]}
 */

let input = [
    4,
    3,
    2,
    7,
    8,
    2,
    3,
    1
];
var findDisappearedNumbers = function (nums) {

    let missing = []
    let map = {}

    nums.forEach((n, i) => {
        if (map[n] === undefined) {
            map[n] = "F";
        }
    })

    for (let i = 1; i <= nums.length; i++) {
        if (map[i] === undefined) {
            missing.push(i);
        }
    }

    return missing;

};

console.log(findDisappearedNumbers(input));