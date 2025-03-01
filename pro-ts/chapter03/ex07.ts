const num: number = 0;
type T = typeof num;
const fooo: T = 123;

const commandList = ['attack', 'defend', 'run'] as const;
type Command = (typeof commandList)[number];
