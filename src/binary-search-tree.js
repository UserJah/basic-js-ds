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
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ? 
      findWitchin(node.left, data) : 
      findWitchin(node.right, data);
    }
    
    return findWitchin(this.rootNode, data);
  }

  remove(data) {
    this.root = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {  // if data === node.data => 3 options:
        if (!node.left && !node.right) { // if node has no childerns
          return null;
        }

        if (!node.left) { // if node has no node left children
          node = node.right;
          return node // return link on right children
        }

        if (!node.right) { // if node has no node left children
          node = node.left;
          return node // return link on left children
        }

        // if left and right children exist

        let minFromRigth = node.right; // search min on rigth subtree
        while (minFromRigth.left !== null) { // keep going to the left on rigth subtree
          minFromRigth = minFromRigth.left;
        }
        node.data = minFromRigth.data // node data has min value of tree

        node.right = removeNode(node.right, minFromRigth.data); // delete min node from right subtree
      }
    }
  }

  min() { // always node.left leaf
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() { // always node.rigth leaf
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
