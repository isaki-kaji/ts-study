import { Dollar } from './dollar';
import { Franc } from './franc';

describe('Dollar Test', () => {
  test('multiplication', () => {
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);
    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });

  test('equals', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
  });

  test('franc multiplication', () => {
    const five = new Franc(5);
    expect(five.times(2).equals(new Franc(10))).toBe(true);
    expect(five.times(3).equals(new Franc(15))).toBe(true);
  });
});
