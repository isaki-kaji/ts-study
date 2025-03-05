type Animal = {
  species: string;
  age: string;
};

type Human = {
  name: string;
  age: number;
};

type UUser = Animal | Human;

const tama: UUser = {
  species: 'catus',
  age: '16',
};

const toshiki: UUser = {
  name: 'matu',
  age: 28,
};

console.log(tama);
console.log(toshiki.age);

const showAge = (user: UUser) => {
  console.log(user.age);
};

showAge(toshiki);
showAge(tama);
