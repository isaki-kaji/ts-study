class MyUser {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const kaji = new MyUser('kaji', 27);

console.log(kaji.isAdult());

// エラーになる
// console.log(kaji.#age);
