function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;

  for (const n of set) {
    if (!set.has(n - 1)) {
      let tmp = n;
      let current = 1;

      while (set.has(tmp + 1)) {
        current++;
        tmp++;
      }
      longest = Math.max(longest, current);
    }
  }

  return longest;
}
