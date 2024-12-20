// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use         the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  // using simple for loop
  for (let i = 0; i < nums.length; i++) {
    // loop through the array
    for (let j = i + 1; j < nums.length; j++) {
      // loop through the array starting from the next index of i
      if (nums[i] + nums[j] === target) {
        // check if the sum of the two numbers is equal to the target
        return [i, j]; // return the indices of the two numbers
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 13)); // [0, 2]
