const adultUsers = users.filter((user: User) => user.age >= 20);

const isAllAdult = users.every((users: User) => users.age >= 20);

const seniorExists = users.some((user: User) => user.age >= 60);

const john = users.find((user: User) => user.name.startsWith('John'));
