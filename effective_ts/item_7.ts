type Person = {
  name: string;
};

type LifeSpan = {
  birth: Date;
  death?: Date;
};

type PersonSpan = Person & LifeSpan;

const ps: PersonSpan = {
  name: 'isaki',
  birth: new Date('1990/01/01'),
  death: new Date('2500/12/20'),
};

type PSKey = keyof PersonSpan;
