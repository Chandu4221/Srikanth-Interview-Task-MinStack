
export class MinStack {
  stack: Array<any>;

  push(val: any): void {
    this.stack.push(val);
  }
  pop(): void {
    this.stack.pop();
  }

  top(): Number {
    const lastItemIndex = this.stack.length - 1;
    return this.stack[lastItemIndex];
  }

  getMin(): Number {
    return Math.min(...this.stack);
  }

  constructor() {
    this.stack = new Array<any>();
  }
}
