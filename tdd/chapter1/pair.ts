export class Pair {
  constructor(private readonly from: string, private readonly to: string) {}

  public toString(): string {
    return `${this.from}->${this.to}`;
  }
}
