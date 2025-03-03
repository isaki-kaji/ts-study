type User = { name: string; age: number };
const getName = (u: User): string => u.name;
const users: User[] = [
  { name: 'isaki', age: 27 },
  { name: 'wada', age: 46 },
];

const names = users.map(getName);
console.log(names);
