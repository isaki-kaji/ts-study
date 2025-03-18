export {};

function frog(input: string) {
  const [[n], h]: number[][] = input
    .trim()
    .split('\n')
    .map((a) => a.split(' ').map((s) => parseInt(s, 10)));

  const dp: number[] = [];

  dp[0] = 0;
  dp[1] = Math.abs(h[1] - h[0]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(
      dp[i - 1] + Math.abs(h[i] - h[i - 1]),
      dp[i - 2] + Math.abs(h[i] - h[i - 2])
    );
  }

  console.log(dp[n - 1]);
}

// frog(require('fs').readFileSync('/dev/stdin', 'utf8'));
frog(`
4
10 30 40 20
`);
