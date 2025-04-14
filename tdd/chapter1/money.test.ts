import { Dollar } from './dollar';

describe('Dollar Test', () => {
  test('multiplication', () => {
    const five = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  test('equal', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
