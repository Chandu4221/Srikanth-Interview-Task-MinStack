export class MinStack {
  stack: Array<any>;

  push(val: any): void {
    this.stack.push(val);
  }
  pop(): void {
    if (this.stack.length) this.stack.pop();
  }

  top(): Number {
    if (this.stack.length) {
      const lastItemIndex = this.stack.length - 1;
      return this.stack[lastItemIndex];
    }
  }

  getMin(): Number {
    if (this.stack.length) return Math.min(...this.stack);
  }

  constructor() {
    this.stack = new Array<any>();
  }
}
