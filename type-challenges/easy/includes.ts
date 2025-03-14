type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `false`

type A<T extends any[]> = T[number];

type B = A<['a', 'b', 'c']>;
