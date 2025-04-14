export class Franc {
  constructor(private readonly _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(franc: Franc): boolean {
    return this.amount === franc.amount;
  }
}
