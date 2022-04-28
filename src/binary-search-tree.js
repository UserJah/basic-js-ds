const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    if (!this.rootNode) {
      return null;
    } else {
      return this.rootNode;
    }
  }

  //add nodes to tree
  add(data) {
    this.rootNode = addWithcin(this.rootNode, data);

    function addWithcin(node, data) {
      if (!node) {
        return new TreeNode(data);
      }

      if (node.data === data) {
        return node;
    
      }
      if (data < node.data) {
        node.left = addWithcin(node.left, data);
      } else {
        node.right = addWithcin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootNode, data)

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
      searchWithin(node.left, data) : 
      searchWithin(node.right, data);
    }
  }

  find(data) {

    function findWitchin(node, data) {
      if (!node.data) {
        return false;
      }
      if (node.data === data) {
        return node.data;
      }
      return data < node.data ? 
      findWitchin(node.left, data) : 
      findWitchin(node.right, data);
    }
    
    return findWitchin(this.rootNode, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
