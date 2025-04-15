import { Dollar } from './dollar';
import { Franc } from './franc';

export class Money {
  constructor(private readonly _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  public equals(money: Money): boolean {
    return (
      this.amount === money.amount &&
      money.constructor.name === this.constructor.name
    );
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }
}
