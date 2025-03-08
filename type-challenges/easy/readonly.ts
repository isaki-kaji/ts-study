export {};

interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [p in keyof T]: T[p];
};

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};
