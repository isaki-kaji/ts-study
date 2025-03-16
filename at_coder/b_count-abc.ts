export {};

const main = (input: string) => {
  const lines = input.trim().split('\n');
  const s = lines[1].trim();

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      if (s[i + 1] === 'B' && s[i + 2] === 'C') {
        count++;
      }
    }
  }
  console.log(count);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
