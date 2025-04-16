import { Expression } from './expression';
import { Money } from './money';
import { Pair } from './pair';

export class Bank {
  private rates = new Map<string, number>();

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).toString(), rate);
  }

  public rate(from: string, to: string): number {
    const pair = new Pair(from, to).toString();
    return this.rates.get(new Pair(from, to).toString()) ?? 1;
  }
}
