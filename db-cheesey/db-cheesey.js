const { Sequelize } = require('sequelize');
const path = require('path')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    // no need to include 'users/fatoumata.kaba' in the storage path,
    // as other users running the app wouldn't be able to create or 
    // navigate to this directory
    storage:'/Users/fatoumata.kaba/cheese-boards/db.sqlite'

})
    // storage: path.join(__dirname, '/Users/fatoumata.kaba/cheese-boards/db.sqlite')
module.exports = {sequelize};