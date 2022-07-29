const express = require("express");
const bstRouter = express.Router();
const bstController = require("../controllers/bst-controller");

//create BST
bstRouter.post("/bst/new", bstController.createBST);

//get one
bstRouter.get("/bst/:id", bstController.getOneBST);

//get all
bstRouter.get("/bst", bstController.getAllBST);

module.exports = bstRouter;
