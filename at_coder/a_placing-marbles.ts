export {};

const main = (input: string) => {
  console.log(
    input
      .trim()
      .split('')
      .map(Number)
      .reduce((sum, n) => sum + n, 0)
  );
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
