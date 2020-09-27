var maxSubArray = function(nums) {
  let max = nums[0]
  for(let i = 0; i < nums.length; i++){
      let sum = nums[i]
      if(nums[i] > max) max = nums[i]
      for(let j = i + 1; j < nums.length ; j++){
          sum += nums[j]
          if(sum > max) max = sum
      }
  }
  return max
};

// better way
var maxSubArray = function(nums) {
  // 從陣列第一個開始
  let result = nums[0];
  let sum = nums[0];
  
  for(let i = 1; i < nums.length; i++) {
      // 第一個+第二個 跟 第二個比大小
      // 留加起來大的，如果第二個元素大，捨棄第一組
      sum = Math.max(sum+nums[i], nums[i])
      result = Math.max(result, sum)
  }
return result
};