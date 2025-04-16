import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  constructor(
    private readonly _augend: Money,
    private readonly _addend: Money
  ) {}

  get augend(): Money {
    return this._augend;
  }

  get addend(): Money {
    return this._addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
