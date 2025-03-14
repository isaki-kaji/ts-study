export {};

const main = (input: string) => {
  const [n, y] = input.trim().split(' ').map(Number);
  let res10000 = -1;
  let res5000 = -1;
  let res1000 = -1;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; i + j <= n; j++) {
      const count1000 = n - i - j;
      const total = 10000 * i + 5000 * j + 1000 * count1000;
      if (total === y) {
        res10000 = i;
        res5000 = j;
        res1000 = count1000;
        break;
      }
    }
  }
  console.log(`${res10000} ${res5000} ${res1000}`);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
