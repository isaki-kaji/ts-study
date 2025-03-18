function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const tmp = target - nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      if (tmp === nums[j]) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSum2(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}
