const Sequelize = require('sequelize');
const db = require('../model/sequelize');
const User = db.sequelize.define(
    'user',
    {
        id: {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        first_name: {
            type : Sequelize.STRING,
        },
        email : {
            type : Sequelize.STRING,
        },
        password : {
            type : Sequelize.STRING,
        },
        created : {
            type : Sequelize.DATE,
            defaultValue: Sequelize.NOW

        }
    },
    {
        timestamps : false
    }
);
module.exports = User;