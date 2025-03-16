export {};
const main = (input: string) => {
  const n = Number(input.trim());

  let flag = false;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i * j === n) {
        flag = true;
      }
    }
  }
  console.log(flag ? 'Yes' : 'No');
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
