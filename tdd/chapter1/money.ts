export class Money {
  constructor(private readonly _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  public equals(money: Money): boolean {
    return this.amount === money.amount;
  }
}
