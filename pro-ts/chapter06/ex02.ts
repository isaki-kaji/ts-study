type FooString = 'foo';

const foo: FooString = 'foo';

const getHelloString = (): `Hello, ${string}!` => {
  const rand = Math.random();

  if (rand < 0.3) {
    return 'Hello, world!';
  } else {
    return 'Hello, JAPAN!';
  }
};
