class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree {
  
    constructor () {
      this.rootNode = null;
    }
    // show rootNode node
    root() {
        if (this.rootNode === null) {
          return null;
        } else {
          return this.rootNode;
        }
      }
    //add nodes to tree
    add(data) {
      const newNode = new TreeNode(data)
      if (!this.rootNode) {
        this.rootNode = newNode;
        return;
      }
  
      let curretNode = this.rootNode;
  
      while(curretNode) {
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
  
    // has(/* data */) {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
  
    // find(/* data */) {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
  
    // remove(/* data */) {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
  
    // min() {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
  
    // max() {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
  }



  const myTree = new BinarySearchTree();
  myTree.add(7);
  myTree.add(8);
  myTree.add(12);
  myTree.add(15);
  myTree.add(6);
  myTree.add(4);
  myTree.add(9);
  myTree.add(22);
  myTree.add(14);
  
  console.log(myTree);
  console.log(myTree.root().data);
