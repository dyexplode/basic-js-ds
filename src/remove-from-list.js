const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList( l, k ) {
  //throw new NotImplementedError('Not implemented');
  let listItem = l;
  //remove if k in head
  while(listItem && listItem.value === k){
    if (listItem.next){  
      listItem = listItem.next;
    }else{
      listItem = null;
    }
    l = listItem;
  }
  //remove if k in body
  let prevItem = null;
    while (listItem.next){
      while (listItem.next.value === k){
        listItem.next = listItem.next.next;
        //fix if k in tale
        if (!listItem.next) break;
      };
      prevItem = listItem;
      listItem = listItem.next;
      //fix if k in tale
      if (!listItem) break;
    };
  return l;
}

module.exports = {
  removeKFromList
};
