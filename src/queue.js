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
class Queue {
  constructor() {
    this.value = null;
    this.next = 0;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    if (this.next === 0) {
      this.value = new ListNode(value);
    } else {
      let current = this.value;

      while (current.next) {
      current = current.next;
    }
        current.next = new ListNode(value);
    }


    this.next++;
  }

  dequeue() {
    if (!this.value) {
      return null;
    }
    let deleteVal = this.value;
    if (this.value === this.next) {
      this.value = null;
      this.next = null;
    } else {
      this.value = this.value.next;
    }
    return deleteVal.value
  }
}

module.exports = {
  Queue
};
