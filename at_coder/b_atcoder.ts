export {};

const main = (input: string) => {
  const s = input.trim();
  const acgt = ['A', 'C', 'G', 'T'];
  let maxLen = 0;
  let len = 0;

  for (let i = 0; i < s.length; i++) {
    if (acgt.includes(s[i])) {
      len++;
      maxLen = Math.max(maxLen, len);
    } else {
      len = 0;
    }
  }
  console.log(maxLen);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
