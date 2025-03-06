const names = ['uhyo', 'kept', 'tea'] as const;

// 配列はオブジェクトであり、そのプロパティ名はインデックスである。
type Name = (typeof names)[number];
