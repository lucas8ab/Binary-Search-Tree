/* eslint-disable no-unused-vars */
const BST = require("../src/bstClass");

// chequea si el array es de integers
const checkArray = (array) => {
  // const params = req.body.name ? req.body : req.query;
  const bstArray = array;

  for (let num of bstArray) {
    if (!Number.isInteger(num)) {
      return false;
    }
  }
  console.log("salida:", bstArray);
  return bstArray;
};

//GET '/bst/:name'
const createBST = (req, res) => {
  const bstArray = checkArray(req.body.array);
  // console.log("--:", bstArray);
  const bst = new BST();
  let arbol = [];

  if (bstArray) {
    for (let node of bstArray) {
      bst.add(node);
      arbol.push(node);
    }
    console.log(bst.findMin());
    console.log(bst.findMax());
    let size = arbol.length;

    res.send({ bst: { arbol, size } });
  } else res.status(400).json({ error: "array must be Integers " });
};

//GET '/bst/:name'
const getOneBST = (req, res) => {
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
