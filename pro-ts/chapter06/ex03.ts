const signNumber = (type: 'plus' | 'minus') => {
  return type === 'plus' ? 1 : -1;
};

console.log(signNumber('plus'));

type SignType = 'plus' | 'minus';

const numberWithSign = (num: number, type: SignType | 'none') => {
  if (type === 'none') {
    return 0;
  }

  return num * signNumber(type);
};

const formatNumberOrString = (value: string | number) => {
  if (typeof value === 'number') {
    return value.toFixed(3);
  } else {
    return value;
  }
};
