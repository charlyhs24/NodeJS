var db = require('../model/dbconnection');
var blogModel = require('../model/blog');
module.exports = {
    storeBlog(req,res){
        blogModel
        .findOrCreate({
            where: {
                title : req.body.title,
                body : req.body.body
            }})
        .spread((blog, created) => {
            if(!created) {
                res.status(403).json({
                    message : "data sudah ada"
                });
            }else{
                res.json({
                    message : "data blog berhasil disimpan"
                });
            }
        });
    },
    getAllBlog(req,res){
        var result = db.query('SELECT * from blog',(error,result, field) => {
            if (error) throw error;
            res.send(result); 
        });
    },
    getId(req,res){
        blogId = req.params.blogId;
        var result = db.query('SELECT * from blog where id='+blogId+'',(error, result, field) => {
            res.send(result);
        });
    },
    getById(req, res){
        blogModel
        .findById(req.params.blogId)
        .then((result) => { 
            if(result) { 
                res.json({
                    data : result
                });
            }else {
                res.status(404).json({
                    message : "Article tidak ditemukan"
                });
            }
        }).catch((err) => {
            res.send(err);
        });
        // res.send(req.params.blogId);
    },
    deleteArticle(req, res){
        blogModel
        .destroy({
            where : {
                id : req.params.blogId
            }
        }).then((result) => {
            if(result){
                res.json({
                    message : "Article berhasil dihapus"
                 });
            }else {
                res.status(404).json({
                    message : "Article tidak ditemukan"
                });
            }
        });
    }
};