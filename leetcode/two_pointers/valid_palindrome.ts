function isPalindrome(s: string): boolean {
  const text = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
  for (let i = 0; i < text.length / 2; i++) {
    if (!(text[i] === text[text.length - i - 1])) {
      return false;
    }
  }
  return true;
}

function isPalindromeAns(s: string): boolean {
  const text = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (text[left] !== text[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
