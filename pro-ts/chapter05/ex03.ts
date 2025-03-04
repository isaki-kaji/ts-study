class GUser<T> {
  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }
}

const kkaji: GUser<string> = new GUser('kaji', 27, '追加のデータ');
