import { Bank } from './bank';
import { Expression } from './expression';
import { Sum } from './sum';

export class Money implements Expression {
  constructor(
    private readonly _amount: number,
    private readonly _currency: string
  ) {}

  get amount(): number {
    return this._amount;
  }

  get currency(): string {
    return this._currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public plus(append: Money): Expression {
    return new Sum(this, append);
  }

  public equals(money: Money): boolean {
    return this.amount === money.amount && this.currency === money.currency;
  }

  public reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
