const { Stack, Queue } = require('./dataStructures');

test('Stack operations', () => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.isEmpty()).toBe(false);
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
});

test('Queue operations', () => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.isEmpty()).toBe(false);
  queue.clear();
  expect(queue.isEmpty()).toBe(true);
});