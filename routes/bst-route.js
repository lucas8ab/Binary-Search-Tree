const express = require('express'); //import express

// 1.
const bstRouter  = express.Router(); 
// 2.
const bstController = require('../controllers/bst-controller'); 
// 3. route and callback
bstRouter.post('/bst', bstController.newBST); 
// 4. 
module.exports = bstRouter; // export to use in server.js
