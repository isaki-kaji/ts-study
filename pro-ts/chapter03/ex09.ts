type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const family: Family<number, string> = {
  mother: 0,
  father: 100,
  child: '1000',
};

type HasName = {
  name: string;
};

type Animal = {
  name: string;
  age: number;
};

type Human = {
  name: string;
  job: string;
};

type Family2<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const family2: Family2<Animal, Human> = {
  mother: { name: 'wada', age: 55 },
  father: { name: 'masuda', age: 67 },
  child: { name: 'isaki', job: 'pilot' },
};

// オプショナルな型引数
type Family3<Parent = Animal, Child = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
