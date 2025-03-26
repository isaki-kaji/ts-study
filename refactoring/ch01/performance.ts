import createStatementData from './createStatementData';

export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Performance = {
  play: Play;
  audience: number;
};

export type PlayType = 'tragedy' | 'comedy';

export type Play = {
  name: string;
  type: PlayType;
};

export type Plays = {
  hamlet: Play;
  'as-like': Play;
  othello: Play;
};

function statement(invoice: Invoice, plays: Plays) {
  return renderPlainText(createStatementData(invoice, plays));

  function renderPlainText(data: any): string {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
      result += `${perf.play.name}: ${usd(perf.amount)} (${
        perf.audience
      } seats)\n`;
    }
    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;

    function usd(num: number): string {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }).format(num / 100);
    }
  }
}
