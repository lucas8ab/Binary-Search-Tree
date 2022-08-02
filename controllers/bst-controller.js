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

//POST '/bst/new'
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

//GET '/bst/find'
const findNode = (req, res) => {
  const bst = createBST(req.body.array);
  let node = bst.find(req.body.find);
  console.log(node);

  res.send({ node });
};

//GET '/bst/isPresent'
const isPresent = (req, res) => {
  const bst = createBST(req.body.array);
  let exist = bst.isPresent(parseInt(req.query.find));

  res.json({ message: "Node is: " + exist });
};

//DEL '/bst/remove'
const remove = (req, res) => {
  const bst = createBST(req.body.array);
  bst.remove(req.body.remove);
  console.log(bst);

  res.send({ bst });
};

//GET '/bst/'
const a = (req, res) => {
  // console.log(bst.isBalanced());
  // console.log(bst.inOrder());
  // console.log(bst.preOrder());
  // console.log(bst.postOrder());
  // console.log(bst.levelOrder());
  res.json({ message: "GET all BST" });
};

module.exports = {
  findMinNode,
  findMaxNode,
  getDeepestAndDeep,
  createBST,
  findNode,
  isPresent,
  remove,
};
