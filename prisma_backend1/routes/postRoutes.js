const express = require('express');
const router = express.Router();
const { createPost, updatePost, deletePost, getAllPost, getPostById } = require('../controllers/postcontrollers');
const isLoggedIn = require('../middlewares/iflogedinornot');
router.route('/createpost').post(isLoggedIn, createPost)
router.route('/updatepost/:id').put(isLoggedIn, updatePost)
router.route('/deletepost/:id').delete(isLoggedIn, deletePost)
router.route('/getallpost').get(getAllPost)
router.route('/getpost/:id').get(getPostById)
module.exports = router;