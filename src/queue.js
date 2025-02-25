const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
    this.array = [];
  }

  getUnderlyingList() {
    return arrayToList(this.array);
    function arrayToList(array) {
      let linkedList = null;
      for (let i = array.length - 1; i >= 0; i--) {
        linkedList = { value: array[i], next: linkedList };
        };
      return linkedList;
    }
  }
  enqueue(value) { this.array.push(value) }
  dequeue() { return this.array.shift() }
}

module.exports = {
  Queue
};
