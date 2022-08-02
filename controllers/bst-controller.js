/* eslint-disable no-unused-vars */
const BST = require("../src/bstClass");

// chequea si el array es solo de integers
const checkArray = (array) => {
  for (let num of array) {
    if (!Number.isInteger(num)) {
      return false;
    }
  }
  console.log("Array of integers:", array);
  return array;
};

//POST '/bst/:name'
const createBST = (req, res) => {
  let check = req.body?.array ?? req;
  const bstArray = checkArray(check);
  const bst = new BST();
  let array = [];

  if (bstArray) {
    for (let node of bstArray) {
      bst.add(node);
      array.push(node);
    }

    let size = array.length;

    if (res) res.send({ BST: { bst, size } });
    else return bst;
  }
  res
    .status(400)
    .json({ error: "All elements in the array must be integers." });
};

//GET '/bst/deep'
const getDeepestAndDeep = (req, res) => {
  const bst = createBST(req.body.array);
  let deep = bst.findMaxHeight();
  console.log("Deep: " + deep);
  let nodes = bst.printLeafNodes();

  res.json({ message: "Deepest Nodes: " + nodes + " and Deep: " + deep });
};

//GET '/bst/min'
const findMinNode = (req, res) => {
  const bst = createBST(req.body.array);
  let min = bst.findMin();
  console.log(min);

  res.json({ message: "Min node is: " + min });
};

//GET '/bst/max'
const findMaxNode = (req, res) => {
  const bst = createBST(req.body.array);
  let max = bst.findMax();
  console.log(max);

  res.json({ message: "Max node is: " + max });
};

//GET '/bst/max'
const findNode = (req, res) => {
  // console.log(bst.findMinHeight());
  // console.log(bst.findMax());
  // console.log(bst.isBalanced());
  // console.log(bst.inOrder());
  // console.log(bst.preOrder());
  // console.log(bst.postOrder());
  // console.log(bst.levelOrder());
  // console.log(bst.find(82));
  // console.log(bst.isPresent(82));
  res.json({ message: "GET all BST" });
};

module.exports = {
  findMinNode,
  findMaxNode,
  getDeepestAndDeep,
  createBST,
};
