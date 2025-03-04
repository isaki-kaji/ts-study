const sum = (max: number) => {
  try {
    let result = 0;
    for (let i = 1; i < max; i++) {
      result++;
    }
    return result;
  } finally {
    console.log('脱出します。');
  }
};

console.log(sum(100));
