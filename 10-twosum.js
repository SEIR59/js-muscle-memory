// two sum problem in javascript
// given an array of intergers and a target number, return the indices of the two numbers that add up to the target
const nums = [2, 7, 11, 15];
const target = 26;
// output: [0, 1]
// output: because nums[0] + nums[1] = 2 + 7 = 9
let twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
};
console.log(twoSum(nums, target));
