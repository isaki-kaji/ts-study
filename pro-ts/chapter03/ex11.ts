const nested = {
  num: 123,
  obj: {
    foo: {
      kiai: 'wasshoi',
    },
    bar: 'world',
  },
};

const {
  num,
  obj: {
    foo: { kiai },
  },
} = nested;

console.log(num);
console.log(kiai);
