const Sequelize = require('sequelize');
const db = require('../model/sequelize');
const blog = db.sequelize.define(
    'blog',
    {
        id: {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        title: {
            type : Sequelize.STRING,
        },
        body : {
            type : Sequelize.TEXT,
        }
    },
    {
        timestamps : false,
        tableName : 'blog'
    },
    
);
module.exports = blog;