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
  const bstArray = checkArray(req.body.array);
  const bst = new BST();
  let array = [];

  if (bstArray) {
    for (let node of bstArray) {
      bst.add(node);
      array.push(node);
    }
    console.log(bst.findMin());
    console.log(bst.findMax());
    let size = array.length;

    res.send({ response: { bst, size } });
    return;
  }
  res
    .status(400)
    .json({ error: "All elements in the array must be integers." });
};

//GET '/bst/:name'
const getOneBST = (req, res) => {
  // console.log(bst.find(82));
  // console.log(bst.isPresent(82));
  // console.log(bst.findMinHeight());
  // console.log(bst.findMaxHeight());
  // console.log(bst.isBalanced());

  res.json({ message: "GET 1 BST" });
};

//GET '/bst'
const getAllBST = (req, res, next) => {
  res.json({ message: "GET all BST" });
};

module.exports = {
  getAllBST,
  getOneBST,
  createBST,
};
