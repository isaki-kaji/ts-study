import { Bank } from './bank';
import { Money } from './money';
import { Sum } from './sum';

describe('Dollar Test', () => {
  test('multiplication', () => {
    const five = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });

  test('equals', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  test('currency', () => {
    expect(Money.dollar(1).currency).toBe('USD');
    expect(Money.franc(1).currency).toBe('CHF');
  });

  test('addition', () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(reduced.equals(Money.dollar(10))).toBe(true);
  });

  describe('plus', () => {
    test('should return sum', () => {
      const five = Money.dollar(5);
      const result = five.plus(five);
      const sum = result as Sum;
      expect(five.equals(sum.augend)).toBe(true);
      expect(five.equals(sum.addend)).toBe(true);
    });
  });

  describe('reduce', () => {
    test('should ', () => {
      const bank = new Bank();
      const result = bank.reduce(Money.dollar(1), 'USD');
      expect(result.equals(Money.dollar(1))).toBe(true);
    });
  });

  describe('reduce money different currency', () => {
    test('should be equal ', () => {
      const bank = new Bank();
      bank.addRate('CHF', 'USD', 2);
      const result = bank.reduce(Money.franc(2), 'USD');
      console.log(result);
      expect(result.equals(Money.dollar(1))).toBe(true);
    });
  });
});
