const {Sequelize} = require('sequelize')
const {sequelize} = require('../db-cheesey')

const Cheese = sequelize.define('Cheese',{
    title: Sequelize.STRING,
    description: Sequelize.STRING
});


module.exports = {Cheese};