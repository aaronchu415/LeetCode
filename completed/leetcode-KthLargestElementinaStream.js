// _NAME: Kth Largest Element in a Stream
// _LINK: https://leetcode.com/problems/kth-largest-element-in-a-stream/
// _CATEGORY: Array

/**
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, 
return the element representing the kth largest element in the stream.

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums.sort((a, b) => {
    return a - b
  });
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {

  let index = this.nums.length - 1
  let largest = this.nums[index]
  while (largest > val) {
    index--
    largest = this.nums[index]
  }

  this.nums.splice(index + 1, 0, val);

  return this.nums[this.nums.length - this.k]
};

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = Object.create(KthLargest).createNew(k, nums)
* var param_1 = obj.add(val)
*/
