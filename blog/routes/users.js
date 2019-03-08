var express = require('express');
var router = express.Router();

/* GET users listing. */
const UserController = require('../controller/userController');
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create', UserController.createUser);
// router.get('/create', UserController.createUser);
router.get('/profile', UserController.getProfileUser);
router.put('/profile', UserController.editUserProfile);
module.exports = router;
