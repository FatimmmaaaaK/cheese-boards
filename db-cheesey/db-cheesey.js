const { Sequelize } = require('sequelize');
const path = require('path')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:'/Users/fatoumata.kaba/cheese-boards/db.sqlite'

})
    // storage: path.join(__dirname, '/Users/fatoumata.kaba/cheese-boards/db.sqlite')
module.exports = {sequelize};