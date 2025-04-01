type Invoice = {
  orders: { amount: number }[];
  dueDate: Date;
  customer: string;
};

function printOwing(invoice: Invoice) {
  printBanner();
  recordDueDate(invoice);
  printDetails(invoice, calcOutstanding(invoice));
}

function calcOutstanding(invoice: Invoice): number {
  return invoice.orders
    .map((order) => order.amount)
    .reduce((acc, amount) => acc + amount, 0);
}

function recordDueDate(invoice: Invoice): void {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printBanner(): void {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function printDetails(invoice: Invoice, outstanding: number): void {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

class Clock {
  private constructor(private readonly date: Date) {}

  static get today(): Clock {
    return new Clock(new Date());
  }

  getFullYear() {
    return this.date.getFullYear();
  }
  getMonth() {
    return this.date.getMonth();
  }
  getDate() {
    return this.date.getDate();
  }
}
