type Fruit = 'apple' | 'orange' | 'strawberry';

type FruitNumber = {
  [P in Fruit]: number;
};

const numbers: FruitNumber = {
  apple: 3,
  orange: 10,
  strawberry: 20,
};
