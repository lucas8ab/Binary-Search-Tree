const express = require("express");
const bstRouter = express.Router();
const bstController = require("../controllers/bst-controller");

//create BST
bstRouter.post("/bst/new", bstController.createBST);

//get deep
bstRouter.get("/bst/deep", bstController.getDeepestAndDeep);

//get min
bstRouter.get("/bst/min", bstController.findMinNode);

module.exports = bstRouter;
