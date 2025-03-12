export {};

const main = (input: string) => {
  const [[n], a] = input
    .trim()
    .split('\n')
    .map((a) => a.split(' ').map((s) => parseInt(s, 10)));

  let minCount = Infinity;
  for (let v of a) {
    let count = 0;
    while (v % 2 === 0) {
      if (count >= minCount) {
        break;
      }
      count++;
      v = v / 2;
    }
    if (count < minCount) {
      minCount = count;
    }
  }
  console.log(minCount);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
