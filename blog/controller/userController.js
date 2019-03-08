var db = require('../model/dbconnection');
var userModel = require('../model/user');
const auth  = require('../middleware/auth');
module.exports = {
    createUser(req,res){
        userModel
        .findOrCreate({
            where: {
                first_name : req.body.first_name,
                email : req.body.email,
                password : req.body.password
            }})
        .spread((user, created) => {
            if(!created) {
                res.status(403).json({
                    message : "data sudah ada"
                });
            }else{
                res.json({
                    message : "data user berhasil disimpan"
                });
            }
        });
    },
    getProfileUser(req,res){
        const token = req.headers['authorization']
        auth.tokenValidation(token)
        .then((result)=>{
            res.json({
                data : result
            })
        })
        .catch((err)=> {
            res.send(err)
        });
    },
    async editUserProfile(req, res){
        const token = req.headers['authorization'];
        auth.tokenValidation(token)
        .then((userData)=>{
            console.table(userData)
            userModel.findByPk(userData.id)
            .then((dataprofile)=> {
                dataprofile.update({
                    first_name : req.body.first_name,
                    email : req.body.email,
                    password : req.body.password
                }).then((model) => {
                    res.json({
                        data : model
                    })
                }).catch((err) => { res.send(err) })
            }).catch((err) => { res.send(err) })
        }).catch((err)=> { res.send(err) });
    }
};