const { Stack, Queue } = require('./dataStructures');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack:', stack);

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Queue:', queue);