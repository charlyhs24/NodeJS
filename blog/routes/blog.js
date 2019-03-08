var express = require('express');
var router = express.Router();

// import controller
var blogController = require('../controller/blogController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with barang');
// });
router.get('/',blogController.getAllBlog);
router.post('/store',blogController.storeBlog);
router.get('/:blogId',blogController.getById);
router.delete('/:blogId',blogController.deleteArticle);
module.exports = router;
