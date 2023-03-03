const {sequelize} = require('./db-cheesey')
const {User, Board, Cheese} = require('./models/index')
const {
    seedCheese,
    seedUser,
    seedBoard
  } = require('../seedData.js');

  describe('User, Board, and Cheeses Model', () => {

    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    test('can create a User', async () => {
        // TODO - write test
        const newUser = await User.create({
            name: 'Fatima',
            email: 'fatimasnewemail@gmail.com'
        });

        expect(newUser.name).toEqual('Fatima');
        expect(newUser.email).toEqual("fatimasnewemail@gmail.com");
    });

    test('can create a Board', async () => {
        const newBoard = await Board.create({
            type: 'Wooden',
            description: 'chesetnut wood round slab',
            rating: 7.4
        });
        
        expect(newBoard.type).toEqual('Wooden');
 
    });
    test('can create a Cheese', async () => {
        const newCheese = await Cheese.create({
            title: 'Pepperjack',
            description: 'sharp and peppery'
        });
        
        expect(newCheese.description).toEqual('sharp and peppery');
 
    });
    test('can insert and update information', async () => {
        // TODO - write test
        const newUser = await User.create({
            name: 'Fatima',
            email: 'fatimasnewemail@gmail.com'
        });

        const updateUser = await newUser.update({
            name: 'Fatoumata',
            email: 'fatoumatasnewemail@gmail.com'
        });

        expect(newUser.name).toEqual('Fatoumata');
        expect(newUser.email).toEqual("fatoumatasnewemail@gmail.com");
    });
}) 