const obj = {
  bar: 456,
  baz: 789,
};

const obj2 = {
  foo: 123,
  ...obj,
};

console.log(obj2);

// fooは上書きされる
const obj3 = {
  ...obj2,
  foo: -9999,
};

console.log(obj3);
