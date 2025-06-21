// Input: nums = [1,1,2,3,4]
// Output: [1,2,3,4], k = 4

// Input: nums = [2,10,10,30,30,30]
// Output: [2,10,30], k = 3

// const nums = [2, 10, 10, 30, 30, 30]
// const nums1=[1,2,3,4]
// function removeDuplicate(nums) {
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] !== nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i + 1;
// }

// console.log(removeDuplicate(nums));
// console.log(removeDuplicate(nums1));

// Input: nums = [1,2,3,3]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

const Input1 = [1, 2, 3, 3];
const Input2 = [1, 2, 3, 4];

// function uniqueArr(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function uniqueArr(nums) {
//   const seen = [];
//   for(let i = 0 ; i<nums.length;i++){
//     if(seen.includes(nums[i]))return true
//     seen.push(nums[i])
//   }
//   return false
// }

// function uniqueArr(nums) {
//   const seet = new Set();

//   for (let num of nums) {
//     if (seet.has(num)) return true;
//     seet.add(num);
//   }
//   return false;
// }

// console.log(uniqueArr(Input1));
// console.log(uniqueArr(Input2));
