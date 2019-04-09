// _NAME: Permutations II
// _LINK: https://leetcode.com/problems/permutations-ii/
// _CATEGORY: Array-Integer

/**
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

  let output = new Set()
  let currArr = []
  helper(output, currArr, nums)

  // console.log(output)

  let array = [...output].map(s => {
    return s.split(' ').map(l => {
      return Number(l)
    })
  });


  // console.log(array)



  return array

};

var helper = function (output, currArr, nums) {

  //base case
  if (nums.length === 0) {
    if (!(output.has(currArr.join(' ')))) {
      output.add(currArr.join(' '))
    }
    return
  }

  //else 

  for (let i = 0; i < nums.length; i++) {

    let copyOfCurrArr = [...currArr]
    copyOfCurrArr.push(nums[i])

    let copyOfNums = [...nums]
    copyOfNums.splice(i, 1)

    helper(output, copyOfCurrArr, copyOfNums)
  }

}
