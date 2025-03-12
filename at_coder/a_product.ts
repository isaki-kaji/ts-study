function product(input: string) {
  const [a, b]: number[] = input.trim().split(' ').map(Number);
  console.log((a * b) % 2 === 0 ? 'Even' : 'Odd');
}

product(require('fs').readFileSync('/dev/stdin', 'utf8'));
