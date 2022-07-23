/* eslint-disable no-unused-vars */
// newBST function for post BST route
const newBST = (req, res, next) => {
  res.json({ message: "POST new BST" }); // dummy function for now
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
