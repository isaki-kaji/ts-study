import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Question: ', (name) => {
  switch (name) {
    case 'greet':
      console.table('こんにちは。');
      break;
    case 'cat':
      console.log('にゃー');
      break;
    default:
      console.log('コマンドを認識できませんでした。');
  }
  rl.close();
});
