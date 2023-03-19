const {User} = require('./User');
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {sequelize} = require('../db-cheesey');

User.hasMany(Board);
Board.belongsTo(User);

// this could be renamed to cheese_boards or a more descriptive 
// join table name to link boards and cheeses?
// this may help with the commented-out tests as well
const CreativeDesign =sequelize.define('creativeDesign',{ });

Board.belongsToMany(Cheese, {through:CreativeDesign});
Cheese.belongsToMany(Board, {through:CreativeDesign});

module.exports = {
    User,
    Board,
    Cheese,
    CreativeDesign
};
