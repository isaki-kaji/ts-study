export {};

type Invoice = {
  customer: string;
  performances: Performance[];
};

type Performance = {
  playID: string;
  audience: number;
};

type PlayType = 'tragedy' | 'comedy';

type Play = {
  name: string;
  type: PlayType;
};

type Plays = {
  hamlet: Play;
  'as-like': Play;
  othello: Play;
};

function statement(invoice: Invoice, plays: Plays) {
  let totalAmount = 0;
  let result = `Statement for ${invoice.customer}\n`;
  for (let perf of invoice.performances) {
    // 注文の内訳を出力
    result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    } seats)\n`;
    totalAmount += amountFor(perf);
  }

  result += `Amount owed is ${usd(totalAmount)}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;

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

  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (const perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
  }

  function usd(num: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(num / 100);
  }
}
