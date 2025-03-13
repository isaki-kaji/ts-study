export {};

const main = (input: string) => {
  const [n, a, b] = input.trim().split(' ').map(Number);

  let total = 0;
  for (let i = 1; i <= n; i++) {
    const result = i
      .toString()
      .split('')
      .map(Number)
      .reduce((sum, num) => sum + num, 0);

    if (result >= a && result <= b) {
      total += i;
    }
  }
  console.log(total);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
