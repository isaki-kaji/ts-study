function printOwing(invoice) {
  let outstanding = 0;

  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // 未払い金の計算（calculate outstanding）
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録（record due date）
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // 明細の印字（print details）
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
