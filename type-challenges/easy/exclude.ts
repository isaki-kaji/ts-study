type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

type LabEX = string | number | boolean;

type LabEX2 = Exclude<LabEX, number>;
