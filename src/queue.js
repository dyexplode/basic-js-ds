const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');
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
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  //add new item in LinkedList in end
  append(value){
    const newItem = new ListNode(value);
    // if head or tail not yet
    if (!this.head || !this.tail){
      this.head = newItem;
      this.tail = newItem
    }

    //if this inited
    this.tail.next = newItem;
    this.tail = newItem;
  }

  //Load from Array
  createFromArray(arr){
    arr.forEach(value => this.append(value));
  }
}

class Queue {
  constructor(){
    this.qList = [];
  }

  getUnderlyingList() {
    const u = new LinkedList();
    u.createFromArray(this.qList);
    return u.head;
    
    
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.qList.push(value);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    return this.qList.shift();
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
