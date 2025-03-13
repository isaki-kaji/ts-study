export {};

const main = (input: string) => {
  const [a, b, c, x] = input.trim().split('\n').map(Number);

  let count = 0;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        const sum = 500 * i + 100 * j + 50 * k;
        if (sum === x) {
          count++;
        }
      }
    }
  }

  console.log(count);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
