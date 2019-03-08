var db = require("../model/dbconnection");
var jwt = require("jsonwebtoken");
var userModel = require("../model/user");
var auth = require("../middleware/auth");
module.exports = {
  register(req, res) {
    userModel
      .findOrCreate({
        where: {
          first_name: req.body.first_name,
          email: req.body.email,
          password: req.body.password
        }
      })
      .spread((user, created) => {
        if (!created) {
          res.status(403).json({
            message: "maaf, data yang ada masukan sudah ada"
          });
        } else {
          res.json("data user berhasil disimpan");
        }
      });
  },
  signIn(req, res) {
    user = {
      id: null,
      email: req.body.email,
      password: req.body.password
    };
    userModel
      .findOne({
        where: {
          email: user.email,
          password: user.password
        }
      })
      .then(value => {
        if (!value) {
          res.json({
            err: true,
            message: "data tidak ada"
          });
        } else {
          user.id = value.id;
          let token = auth.generateToken(user);
          res.json({
            data: value,
            token: token
          });
        }
      });
  },
  verifyToken(req, res) {
    var token = req.headers["authorization"];
    jwt.verify(token, "secret", function(err, authData) {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: "done",
          authData
        });
      }
    });
  }
};
