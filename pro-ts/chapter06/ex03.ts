const signNumber = (type: 'plus' | 'minus') => {
  return type === 'plus' ? 1 : -1;
};

console.log(signNumber('plus'));
