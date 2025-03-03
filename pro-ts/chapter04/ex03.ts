type ReturnObj = {
  bmi: number;
};

const calcBMIObj = ({ height, weight }: Human): ReturnObj => ({
  bmi: weight / height ** 2,
});
