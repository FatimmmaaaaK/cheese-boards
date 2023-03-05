const {User} = require('./User');
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {sequelize} = require('../db-cheesey');




User.hasMany(Board);
Board.belongsTo(User);


const CreativeDesign =sequelize.define('creativeDesign',{ });

Board.belongsToMany(Cheese, {through:CreativeDesign});
Cheese.belongsToMany(Board, {through:CreativeDesign});




module.exports = {
    User,
    Board,
    Cheese,
    CreativeDesign
};
