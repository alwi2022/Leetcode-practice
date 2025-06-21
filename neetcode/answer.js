// Input: nums = [1,1,2,3,4]
// Output: [1,2,3,4], k = 4

// Input: nums = [2,10,10,30,30,30]
// Output: [2,10,30], k = 3

const nums = [2, 10, 10, 30, 30, 30]
const nums1=[1,2,3,4]
function duplicate(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(duplicate(nums));
console.log(duplicate(nums1));
