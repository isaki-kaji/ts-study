function maxArea(height: number[]): number {
  let maxAmount = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxAmount = Math.max(
      maxAmount,
      (right - left) * Math.min(height[left], height[right])
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxAmount;
}
