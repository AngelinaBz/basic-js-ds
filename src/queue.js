const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class ListNode {
//   constructor(x) {
//   this.value = x;
//   this.next = null;
//   }
// }
class Queue {
  constructor() {
    this.queue = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue === null) {
      this.queue = new ListNode(value);
      this.tail = this.queue;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    let removed = this.queue.value;
    this.queue = this.queue.next;
    return removed;
  }
}

module.exports = {
  Queue
};
