export {};

type LHuman = {
  type: 'human';
  name: string;
  age: number;
};

function setAge(human: LHuman, age: LHuman['age']) {
  return {
    ...human,
    age,
  };
}

const washo: LHuman = {
  type: 'human',
  name: 'washo',
  age: 27,
};

const washo2 = setAge(washo, 28);

console.log(washo2);
