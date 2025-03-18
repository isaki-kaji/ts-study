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

const main2 = (input: string) => {
  const n = Number(input.trim());
  if (n < 9) {
    console.log(n);
    return;
  }

  if (n < 100) {
    console.log(9);
    return;
  }

  if (n < 1000) {
    console.log(n - 99 + 9);
    return;
  }

  if (n < 10000) {
    console.log(909);
    return;
  }

  if (n < 100000) {
    console.log(n - 9999 + 918);
    return;
  }

  console.log(90909);
};

main2(require('fs').readFileSync('/dev/stdin', 'utf8'));
