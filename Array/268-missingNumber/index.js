var missingNumber = function(nums) {
  const arr = nums.sort((a, b) => a - b)
  for(let i = 0; i <= nums.length; i++){
      if(nums[i] !== i) return i
  }
};