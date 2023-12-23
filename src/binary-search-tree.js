const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNew = null;
  }
  root() {
    return this.rootNew;
  }

  add(data) {
    this.rootNew = addNew(this.rootNew, data);

    function addNew(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNew(node.left, data);
      } else {
        node.right = addNew(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return search(this.rootNew, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? search(node.left, data) : search(node.right, data);
    }
}

  find(data) {
    return find(this.rootNew, data);

    function find(node, data){
      if(!node){
        return null;
      }

      if(node.data === data){
        return node;
      }

      return data < node.data ? find(node.left, data) : find(node.right, data);
    }
  }

  remove(data) {
    this.rootNew = removeNode(this.rootNew, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }
        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNew) {
      return null;
    }

    let node = this.rootNew;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNew) {
      return null;
    }

    let node = this.rootNew;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};