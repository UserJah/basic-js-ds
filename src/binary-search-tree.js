const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor () {
    this.root = null;
  }

  root() {
    if (!this.BinarySearchTree[0]) {
      return null
    }
    return this.BinarySearchTree[0];
  }

  add(data) {
    const newNode = new TreeNode(data)
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let curretNode = this.root;

    while(curretNode == true) {
      if (newNode.data < curretNode.data) {
        if (!curretNode.left) {
          curretNode.left = newNode;
          return;
        }
        curretNode = curretNode.left
      } else {
          if (!curretNode.right) {
            curretNode.right = newNode;
            return;
        }
        curretNode = curretNode.right;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
