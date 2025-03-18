export {};

const main = (input: string) => {
  const n = Number(input.trim());

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i.toString().length % 2 !== 0) {
      count++;
    }
  }
  console.log(count);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
