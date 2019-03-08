var express = require("express");
var router = express.Router();

// import controller
const loginController = require("../controller/loginController");
const articleController = require("../controller/articleController");
/* GET home page. */
router.post("/signin", loginController.signIn);
router.post("/signup", loginController.register);
router.get("/checkToken", loginController.verifyToken);

router.get("/article/:user_id", articleController.getArticle);
router.get("/article/:user_id/:article_id", articleController.getById);
router.delete("/article/:user_id/:article_id", articleController.deleteArticle);
router.post("/article", articleController.createArticle);
module.exports = router;
