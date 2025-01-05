const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootHead = null;
  }

  root() {
    return this.rootHead;
  }

  add(data) {
    const newNode = new Node(data);

    if(!this.rootHead) {
      this.rootHead = newNode;
      return;
    }

    let curNode = this.rootHead;

    while(curNode) {
      if (newNode.data < curNode.data) {
        if (!curNode.left) {
          curNode.left = newNode;
          return;
        }
        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = newNode;
          return;
        }
        curNode = curNode.right;
      }
    }
  }

  has(data) {
    if (this.find(data) === null) {
      return false;
    } else {
      return true;
    }
  }

  find(data) {
    let curNode = this.rootHead;

    while (curNode) {
      if (curNode.data === data) {
        return curNode;
      }
      if (data < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootHead = deleteNode(this.rootHead, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = deleteNode(node.right, minFromRight.data)
        return node;
      }
    }
  }

  min() {
    if (!this.rootHead) {
      return null;
    }
    let curNode = this.rootHead;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    if (!this.rootHead) {
      return null;
    }
    let curNode = this.rootHead;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
