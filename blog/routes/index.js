var express = require("express");
var router = express.Router();

let auth = require("../middleware/auth");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
  // next();
});
// router.get("/", auth.sayHi);
module.exports = router;
