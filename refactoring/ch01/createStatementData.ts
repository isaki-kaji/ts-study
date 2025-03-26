import { Invoice, Play, Plays, Performance } from './statement';

export type Data = {
  customer: string;
  performances: RichPerformance[];
  totalAmount: number;
  totalVolumeCredits: number;
};

type RichPerformance = Performance & {
  play: Play;
  amount: number;
  volumeCredits: number;
};

export default function createStatementData(
  invoice: Invoice,
  plays: Plays
): any {
  const statementData: Partial<Data> = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(perf: Performance): RichPerformance {
    const calculator = createPerformanceCalculator(perf, playFor(perf));
    return {
      ...perf,
      play: calculator.play,
      amount: calculator.amount,
      volumeCredits: calculator.volumeCredits,
    };
  }

  function playFor(perf: Performance): Play {
    return plays[perf.playID];
  }

  function totalAmount(data: any): number {
    return data.perfomances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data: any) {
    return data.perfomances.reduce((total, p) => total + p.amount, 0);
  }
}

function createPerformanceCalculator(
  performance: Performance,
  play: Play
): PerformanceCalculator {
  switch (play.type) {
    case 'tragedy':
      return new TragedyCalculator(performance, play);
    case 'comedy':
      return new ComedyCalculator(performance, play);
    default:
      throw new Error();
  }
}

abstract class PerformanceCalculator {
  constructor(
    protected readonly performance: Performance,
    readonly play: Play
  ) {}

  get amount(): number {
    throw new Error();
  }

  get volumeCredits(): number {
    let result = 0;
    result += Math.max(this.performance.audience - 30, 0);

    if (this.play.type === 'comedy') {
      result += Math.floor(this.performance.audience / 5);
    }

    return result;
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount(): number {
    let result = 30000;
    if (this.performance.audience) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }
}
