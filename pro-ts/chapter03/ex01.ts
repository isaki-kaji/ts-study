const obj = {
  foo: 123,
  bar: 'Hello, world!!',
};

console.log(obj.foo);
console.log(obj.bar);

const propName = 'foo';
const obj2 = {
  [propName]: 456,
};

console.log(obj2[propName]);
console.log(obj2.foo);
