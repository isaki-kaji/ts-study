export {};

const main = (input: string) => {
  const lines = input.trim().split('\n').map(Number);
  const d = lines.slice(1);
  d.sort((a, b) => a - b);
  let count = 1;
  let currentSize = d[0];
  for (let i = 1; i < d.length; i++) {
    if (d[i] === currentSize) {
      continue;
    }
    count++;
    currentSize = d[i];
  }
  console.log(count);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
