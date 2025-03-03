type Human = {
  height: number;
  weight: number;
};

const calcBMI = function ({ height, weight }: Human): number {
  return weight / height ** 2;
};

const isaki: Human = { height: 1.74, weight: 61 };
console.log(calcBMI(isaki));
