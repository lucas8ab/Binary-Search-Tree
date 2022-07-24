const express = require("express"); //import express

// 1.
const bstRouter = express.Router();
// 2.
const bstController = require("../controllers/bst-controller");

// 3. route and callback
//create
bstRouter.post("/bst/new", bstController.createBST);

//get one
bstRouter.get("/bst/:id", bstController.getOneBST);

//get all
bstRouter.get("/bst", bstController.getAllBST);

// 4.
module.exports = bstRouter; // export to use in server.js
