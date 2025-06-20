// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:


// Output: true
//without new set
nums = [1,2,3,4];
 nums = [1,1,1,3,3,4,3,2,4,2]

var containsDuplicate = function (nums) {
    let numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
        return true;
        }
        numSet.add(nums[i]);
    }
    return false;
};

console.log(containsDuplicate(nums)); // true
