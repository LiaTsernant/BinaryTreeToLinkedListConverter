let expect = require("chai").expect;
let converter = require("../lib/treeToLinkedListByDepth");

describe("Tree to Linked List by Depth Converter", function() {
  it("Works", function() {
    let bst = new converter.BST(5);
    bst.addNode(4);
    bst.addNode(2);
    bst.addNode(7);
    bst.addNode(5);
    bst.addNode(1);

    let result = [
      new converter.LinkedList(),
      new converter.LinkedList(),
      new converter.LinkedList(),
      new converter.LinkedList()
    ];

    //    5
    //   4 7
    //  2 5
    // 1

    result[0].addNode(5);
    result[1].addNode(4);
    result[1].addNode(7);
    result[2].addNode(2);
    result[2].addNode(5);
    result[3].addNode(1);

    expect(bst.convertTreeToLists()).to.deep.equal(result);
  });
  it("Works on a tree where all elements are the same", function() {
    let bst = new converter.BST(5);
    bst.addNode(5);
    bst.addNode(5);
    bst.addNode(5);

    let result = [
      new converter.LinkedList(),
      new converter.LinkedList(),
      new converter.LinkedList(),
      new converter.LinkedList()
    ];
    result[0].addNode(5);
    result[1].addNode(5);
    result[2].addNode(5);
    result[3].addNode(5);

    expect(bst.convertTreeToLists()).to.deep.equal(result);
  });

  it("Works on a single node tree", function() {
    let bst = new converter.BST(5);
    let result = [new converter.LinkedList()];
    result[0].addNode(5);

    expect(bst.convertTreeToLists()).to.deep.equal(result);
  });
});
