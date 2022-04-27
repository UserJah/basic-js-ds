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

  constructor () {
    this.Queue = [];
  }
  getUnderlyingList() {
    if (this.Queue.length === 0) {
      return 0;
    }

    let nodes = [];

    for (let i = 0; i < this.Queue.length; i++) {
      let node = {};
      node.value = this.Queue[i];
      node.next = null;
      nodes.push(node);
    }
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    console.log(nodes);
    return nodes[0];
  }


  enqueue(value) {
    this.Queue.push(value);
  }

  dequeue() {
    return this.Queue.shift();
  }
}

module.exports = {
  Queue
};
