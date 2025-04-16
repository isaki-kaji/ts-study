import { Expression } from './expression';

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
    return new Money(this.amount + append.amount, this.currency);
  }

  public equals(money: Money): boolean {
    return this.amount === money.amount && this.currency === money.currency;
  }

  public reduce(to: string): Money {
    return this;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
