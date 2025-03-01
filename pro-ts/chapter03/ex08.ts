type FooBar = {
  foo: string;
  bar: number;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const object: FooBarBaz = {
  foo: 'hi',
  bar: 1,
  baz: false,
};

const object2: FooBar = object;
