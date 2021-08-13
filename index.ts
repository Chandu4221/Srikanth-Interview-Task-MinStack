// Import stylesheets
import './style.css';
import { MinStack } from './MinStack';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let minStack = new MinStack();

minStack.push(-2);
console.log('After Push', minStack.stack);
minStack.push(0);
console.log('After Push', minStack.stack);
minStack.push(-3);
console.log('After Push', minStack.stack);
let minValueInStack = minStack.getMin(); // return -3
console.log('minValueInStack', minValueInStack);
minStack.pop();
console.log('After POP ', minStack.stack);
const topItem = minStack.top(); // return 0
console.log('topItem', topItem);
minValueInStack = minStack.getMin(); // return -2
console.log('minValueInStack', minValueInStack);
