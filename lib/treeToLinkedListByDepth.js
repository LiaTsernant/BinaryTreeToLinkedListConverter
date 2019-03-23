class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  addNode(val) {
    if (val <= this.value) {
      if (null !== this.left) {
        this.left.addNode(val);
      } else {
        this.left = new BST(val);
      }
    } else {
      if (null !== this.right) {
        this.right.addNode(val);
      } else {
        this.right = new BST(val);
      }
    }
  }

  convertTreeToLists() {
    let result = [];
    this.treeToList(0, result);

    return result;
  }

  treeToList(depth, arr) {
    if (arr.length <= depth) {
      arr.push(new LinkedList());
    }

    if (null !== this.left) {
      this.left.treeToList(depth + 1, arr);
    }

    if (null !== this.right) {
      this.right.treeToList(depth + 1, arr);
    }

    arr[depth].addNode(this.value);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
  }

  addNode(val) {
    let newNode = { value: val, next: null };
    newNode.next = this.head;
    this.head = newNode;
  }
}

module.exports = {
  LinkedList,
  BST
};