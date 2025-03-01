type Myobj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const obj1: Myobj = { foo: false, bar: true };
const obj2: Myobj = {
  foo: false,
  bar: true,
  baz: 1234,
};

console.log(obj1.baz); // undifined
