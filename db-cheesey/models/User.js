const { Sequelize } = require('sequelize');
const {sequelize} = require('../db-cheesey')

const User = sequelize.define('User',{
    name: Sequelize.STRING,
    email: Sequelize.STRING
});




module.exports = {User} ;