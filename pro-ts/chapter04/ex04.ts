const obj = {
  //メソッド記法
  double(num: number): number {
    return num * 2;
  },

  //通常の記法
  double2: (num: number): number => num * 2,
};
