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
    return findWitchin(this.rootNode, data)

    function findWitchin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return node.data;
      }

      return data < node.data ? 
      findWitchin(node.left, data) : 
      findWitchin(node.right, data);
    }
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



  const myTree = new BinarySearchTree();
  myTree.add(2);
  myTree.add(7);
  myTree.add(1);
  myTree.add(8);
  myTree.add(4);
  myTree.add(32);
  myTree.add(12);
  myTree.add(14);
  // console.log(myTree.has(7));
  // console.log(myTree.has(4));
  // console.log(myTree.has(9));
  // console.log(myTree.has(55));
  // console.log(myTree.has(66));
  console.log(myTree.find(8));
  console.log(myTree.find(2));
  console.log(myTree.find(32));
  console.log(myTree.find(14));
  

const myTree1 = new BinarySearchTree();
myTree1.add(2);
myTree1.add(7);
myTree1.add(1);
myTree1.add(8);
myTree1.add(4);
myTree1.add(32);
myTree1.add(12);
myTree1.add(14);
console.log(myTree.find(33));
console.log(myTree.find(1337));
console.log(myTree.find(42)); 
