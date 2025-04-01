class MinStack {
  constructor(
    private readonly stack: number[] = [],
    private readonly minStack: number[] = []
  ) {}

  push(val: number): void {
    this.stack.push(val);

    const min = this.minStack.length === 0 ? val : Math.min(val, this.getMin());
    this.minStack.push(min);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

var obj = new MinStack();
obj.push(5);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
