export class Dollar {
  constructor(private readonly _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
