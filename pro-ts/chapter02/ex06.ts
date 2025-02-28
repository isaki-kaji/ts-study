import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// nullかundefinedを判定したい場合は「??」を使う
rl.question('名前を入力してください.', (name) => {
  const displayName = name || '名無し';
  console.log(`こんにちは、${displayName}さん。`);
  rl.close();
});
