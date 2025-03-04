class SUser {
  static adminUser: SUser;
  static {
    this.adminUser = new SUser();
    this.adminUser.#age = 9999;
  }

  #age: number = 0;
  getAge() {
    return this.#age;
  }

  setAge(age: number) {
    if (age < 0 || age > 150) {
      return;
    }
    this.#age = age;
  }
}

console.log(SUser.adminUser.getAge());
