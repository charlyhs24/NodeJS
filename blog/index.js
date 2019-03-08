'use strict';
var mysql = require('mysql');
var config = require(__dirname + '/../config/config.json')[env];
var connection = mysql.createConnection({
    host: 'example.org',
    user: 'bob',
    password: 'secret'
});