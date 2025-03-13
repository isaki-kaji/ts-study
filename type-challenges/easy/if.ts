type If<T extends boolean, A, B> = T extends true ? A : B;
type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'

const a: A = 'a';
const b: B = 'b';
