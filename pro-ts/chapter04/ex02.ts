type Human = {
  name: string;
  age: number;
  height: number;
  weight: number;
};

const calcBMI2 = ({ height, weight }: Human): number => {
  return weight / height ** 2;
};

const calcBMI3 = ({ height, weight }: Human): number => weight / height ** 2;
