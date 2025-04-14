export class Dollar {
  constructor(private _amount: number) {}

  get amount(): number {
    return this._amount;
  }

  public times(multiplier: number): void {
    this._amount *= multiplier;
  }
}
