const Sequelize = require('sequelize');
const db = require('../model/sequelize');
const  user = require('../model/user');
const article = db.sequelize.define(
    'article',
    {
        id_article: {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        id_user : {
            type : Sequelize.INTEGER,
        },
        title: {
            type : Sequelize.STRING,
        },
        body : {
            type : Sequelize.TEXT,
        }
    }
);
article.belongsTo(user,{
    foreignKey : 'id_user',
    targetKey : 'id'
});
module.exports = article;