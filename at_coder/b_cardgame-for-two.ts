export {};

const main = (input: string) => {
  const [[n], a] = input
    .trim()
    .split('\n')
    .map((a) => a.trim().split(' ').map(Number));

  let alice = 0;
  let bob = 0;
  a.sort((c, d) => d - c);

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      alice += a[i];
    } else {
      bob += a[i];
    }
  }

  console.log(alice - bob);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
