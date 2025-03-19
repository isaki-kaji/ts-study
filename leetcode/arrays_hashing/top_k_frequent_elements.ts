function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const n of nums) {
    if (!map.has(n)) {
      map.set(n, 0);
    }
    map.set(n, map.get(n)! + 1);
  }

  const sortedList = [...map].sort((a, b) => b[1] - a[1]);
  return sortedList.slice(0, k).map((pair) => pair[0]);
}
