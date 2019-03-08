var db = require("../model/dbconnection");
var blogModel = require("../model/blog");
const auth = require("../middleware/auth");
const articleModel = require("../model/article");
module.exports = {
  createArticle(req, res) {
    articleModel
      .findOrCreate({
        where: {
          title: req.body.title,
          id_user: req.body.user_id,
          body: req.body.body
        }
      })
      .spread((blog, created) => {
        if (!created) {
          res.status(403).json({
            message: "data sudah ada"
          });
        } else {
          res.json({
            message: "article berhasil disimpan"
          });
        }
      });
  },
  async getArticle(req, res) {
    let header = req.headers["authorization"];
    auth
      .tokenValidation(header)
      .then(userData => {
        console.log(userData.id);
        articleModel
          .findAll({
            where: {
              id_user: userData.id
            }
          })
          .then(result => {
            if (!result || result.length === 0) {
              res.status(404).json({
                data: result,
                message: "data tidak ditemukan"
              });
            } else {
              res.json({
                data: result
              });
            }
          });
      })
      .catch(err => {
        res.status(404).json({
          message: "invalid credentials",
        });
      });
  },
  getById(req, res) {
    articleModel
      .findAll({
        where: {
          id_user: req.params.user_id
        }
      })
      .then(result => {
        if (!result || result.length === 0) {
          res.status(404).json({
            data: result,
            message: "data user tidak ditemukan"
          });
        } else {
          articleModel
            .findById(req.params.article_id)
            .then(result => {
              if (result) {
                res.json({
                  data: result
                });
              } else {
                res.status(404).json({
                  message: "Article tidak ditemukan"
                });
              }
            })
            .catch(err => {
              res.send(err);
            });
        }
      });
  },
  deleteArticle(req, res) {
    articleModel
      .findAll({
        where: {
          id_user: req.params.user_id
        }
      })
      .then(result => {
        if (!result || result.length === 0) {
          res.status(404).json({
            data: result,
            message: "data user tidak ditemukan"
          });
        } else {
          articleModel
            .destroy({
              where: {
                id_article: req.params.article_id
              }
            })
            .then(result => {
              if (result) {
                res.json({
                  message: "Article berhasil dihapus"
                });
              } else {
                res.status(404).json({
                  message: "Article tidak ditemukan"
                });
              }
            });
        }
      });
  }
};
