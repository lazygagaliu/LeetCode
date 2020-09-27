var majorityElement = function(nums) {
  const half = nums.length / 2
  let maj
  if(nums.length === 1) return nums[0]
  nums.reduce((acc, cur) => {
      const i = acc?.length > 0 ? acc.findIndex(x => x?.el === cur) : -1
      if(i > -1){
        acc[i].n = acc[i].n + 1
          if(acc[i].n > half) {
              maj = acc[i].el
          }
        return acc
          
      } else {
        acc.push({el: cur, n: 1})
          return acc
      }
  }, [])
  return maj
};

// better way
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  return nums[ Math.floor(nums.length / 2) ];
};