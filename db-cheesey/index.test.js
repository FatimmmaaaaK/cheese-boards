const {sequelize} = require('./db-cheesey')
const {User, Board, Cheese, BoardCheese, CreativeDesign} = require('./models/index')
const {
    seedCheese,
    seedUser,
    seedBoard
  } = require('../seedData.js');
const { Sequelize } = require('sequelize');

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
        // test('can load Boards with its Cheeses',async () => {


        //     const newBoard = await Board.create({
        //         type: 'Wooden',
        //         description: 'chesetnut wood round slab',
        //         rating: 7.4
        //     });

        //     const newCheese = await Cheese.create({
        //         title: 'Pepperjack',
        //         description: 'sharp and peppery'
        //     });

        //     const secondCheese = await Cheese.create({
        //         title: 'Gouda',
        //         description: 'tasty'
        //     });
           
        //     // const thirdCheese = await Cheese.create({
        //     //     title: 'Cheddar',
        //     //     description: 'sharp'
        //     // });

        //     console.log(newBoard.__proto__);

        //     await Board.addCheese(newBoard.id, newCheese.id);
        //     await Board.addCheese(newBoard.id, secondCheese.id);

        //     expect(Board.countCheese).toBe(2)

        // });
        // test('can load Cheese with its Boards',async () => {

        //     const cheese = await Cheese.create({
        //         title: 'Pepperjack',
        //         description: 'sharp and peppery'
        //     });

        //     const newBoard = await Board.create({
        //         type: 'Wooden',
        //         description: 'chesetnut wood round slab',
        //         rating: 7.4
        //     });

        //     const secondBoard = await Board.create({
        //         type: 'Wooden',
        //         description: 'chesetnut wood round slab',
        //         rating: 7.4
        //     });

        //     const thirdBoard = await Board.create({
        //         type: 'Wooden',
        //         description: 'chesetnut wood round slab',
        //         rating: 7.4
        //     });

        //     // console.log(newCheese.__proto__);
        //     await cheese.addBoards([newBoard,secondBoard,thirdBoard]);
        //     expect(await cheese.countBoards()).toBe(3);

        //     // Eager loading test
        //     const CheeseyBoards = await Cheese.findAll({ include: Board });
        //     expect(CheeseyBoards.countCheeses).toBe(3);

        //     });

        test('can load user with its boards',async () => {
            const newUser = await User.create({
                name: 'Fatima',
                email: 'fatimasnewemail@gmail.com'
            });

            const newBoard = await Board.create({
                type: 'Wooden',
                description: 'chesetnut wood round slab',
                rating: 7.4,
                UserId: 3
            });
            
            expect(newBoard.UserId).toBe(newUser.id);

        });

    }); 