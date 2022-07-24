/* eslint-disable no-unused-vars */
// newBST function for post BST route
const newBST = (req, res) => {
  // const params = req.body.name ? req.body : req.query;
  const bstArray = req.body.array;

  for (let num of bstArray) {
    if (!Number.isInteger(num)) {
      res.status(400).json({ error: "array must be Integers " });
      return;
    }
  }
  console.log("salida:", bstArray);
  res.send(bstArray);
};

//GET '/tea/:name'
const getOneBST = (req, res, next) => {
  res.json({ message: "GET 1 BST" });
};

//GET '/tea'
const getAllBST = (req, res, next) => {
  res.json({ message: "GET all BST" });
};

module.exports = {
  newBST,
  getAllBST,
  getOneBST,
};
