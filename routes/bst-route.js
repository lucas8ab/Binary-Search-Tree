const express = require("express");
const bstRouter = express.Router();
const bstController = require("../controllers/bst-controller");

//create BST
bstRouter.post("/bst/new", bstController.createBST);

//get deep
bstRouter.get("/bst/deep", bstController.getDeepestAndDeep);

//get min
bstRouter.get("/bst/min", bstController.findMinNode);

//get max
bstRouter.get("/bst/max", bstController.findMaxNode);

//find data
bstRouter.get("/bst/find", bstController.findNode);

//find node
bstRouter.get("/bst/isPresent", bstController.isPresent);

//remove node
bstRouter.delete("/bst/remove", bstController.remove);

//balanced tree
bstRouter.get("/bst/balanced", bstController.isBalanced);

//inOrder
bstRouter.get("/bst/inOrder", bstController.inOrder);

//preOrder
bstRouter.get("/bst/preOrder", bstController.preOrder);

//postOrder
bstRouter.get("/bst/postOrder", bstController.postOrder);

module.exports = bstRouter;
