function twoSum(nums, target) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j] === target)) {
        temp.push(i, j);
      }
    }
  }
  return temp
}

console.log(twoSum([3, 4, 5, 6], 7));
