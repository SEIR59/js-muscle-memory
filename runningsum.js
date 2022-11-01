// running sum
// 1. Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.
function runningSum(nums) {
  let sum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
}

let nums = [1, 2, 3, 4];
console.log(runningSum(nums));
