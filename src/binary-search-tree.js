const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  
  constructor(){
    this.tree = null;
  }

  root() {
    return this.tree;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.tree){
      this.tree = newNode;
      return this;
    }else{
      let n = this.tree;
      do{
        if (n.data < data){
          if (!n.right) {
            n.right = newNode;
          }
          n = n.right;
        }else{
          if (!n.left) {
            n.left = newNode;
          }
          n = n.left;
        }
      }while(n.data !== data)
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    let n = this.tree;
    while(n && n.data !== data){
      if (data > n.data){
        n = n.right;
      }else{
        n = n.left;
      }
    }
    if (n) return true;
    return false;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    let n = this.tree;
    while(n && n.data !== data){
      if (data > n.data){
        n = n.right;
      }else{
        n = n.left;
      }
    }
    return n;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  getMinNode(currentTree){
    if (!currentTree.left) return currentTree;
    return this.getMinNode(currentTree.left);
  }

  remove(data) {
   //throw new NotImplementedError('Not implemented');
   if (data && this.tree !== null){
    let v = this.removeNode(this.tree, data); 
    this.tree = v;
   }
  }

  removeNode(currentTree , value){
    
    if (currentTree.data === value){
      //if both childs are empty
      if(currentTree.left === null && currentTree.right === null){
        return null;
      }

      //if only one child is empty
      if(currentTree.left === null){
        return currentTree.right;
      }

      if (currentTree.right === null){
        return currentTree.left;
      }

      //if have both childs
      const minRightNode = this.getMinNode(currentTree.right);
      currentTree.data = minRightNode.data;
      currentTree.right = this.removeNode(currentTree.right, minRightNode.data);

      return currentTree;
    }
    // if value not found

    if (value < currentTree.data){
      if (currentTree.left === null){
        //Node don't found
        return currentTree;
      }
      currentTree.left = this.removeNode(currentTree.left, value);
      return currentTree;
    }

    if (value > currentTree.data){
      if(currentTree.right === null){
        //Node don't found
        return currentTree;
      }
      currentTree.right = this.removeNode(currentTree.right, value);
      return currentTree;
    }

  }

  min() {
    let n = this.tree;
    while(n && n.left){
      n = n.left;
    }
    return n.data;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let n = this.tree;
    while(n && n.right){
      n = n.right;
    }
    return n.data;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};