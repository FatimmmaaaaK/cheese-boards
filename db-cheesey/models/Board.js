const { Sequelize } = require('sequelize');
const {sequelize} = require('../db-cheesey')

const Board = sequelize.define('Board',{
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.INTEGER
});

module.exports = {Board};