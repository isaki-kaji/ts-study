import { Invoice, Play, Plays, Performance } from './performance';

type Data = {
  customer: string;
  performances: Performance[];
  totalAmount: number;
  totalVolumeCredits: number;
};

type RichPerformance = Performance & {
  play: Play;
  amount?: number;
  volumeCredits?: number;
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
    return {
      ...perf,
      play: playFor(perf),
      amount: amountFor(perf),
      volumeCredits: volumeCreditsFor(perf),
    };
  }

  function playFor(perf: Performance): Play {
    return plays[perf.playID];
  }

  function amountFor(perf: Performance): number {
    let result = 0;
    switch (playFor(perf).type) {
      case 'tragedy':
        result = 40000;
        if (perf.audience > 30) {
          result += 1000 * (perf.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (perf.audience > 20) {
          result += 10000 + 500 * (perf.audience - 20);
        }
        result += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknown type: ${playFor(perf).type}`);
    }
    return result;
  }

  function volumeCreditsFor(perf: Performance): number {
    let volumeCredits = 0;
    volumeCredits += Math.max(perf.audience - 30, 0);

    if (playFor(perf).type === 'comedy') {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    return volumeCredits;
  }

  function totalAmount(data: any): number {
    return data.perfomances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data: any) {
    return data.perfomances.reduce((total, p) => total + p.amount, 0);
  }
}
