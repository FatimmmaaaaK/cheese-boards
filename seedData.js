const seedCheese = [
    {
       title:'Gouda',
       description:'Umami'
    },
    {
        title:'Parmasean',
        description:'Zesty'
    },
    {
        title:'Provalone',
        description:'Sandwhichy'
    }
]

const seedUser = [
    {
       name:'Fatima',
       email:'fatimasemail@gmail.com'
    },
    {
        name:'Joy',
        email:'Frowns@gmail.com'
    },
    {
        name:'Brad Pitt',
        email:'MissingAngelina@gmail.com'
    }
]
const seedBoard = [
    {
        type: 'Granite',
        description: 'Black and Charcoal',
        rating: '7.2'

    },
    {
        type: 'Wooden',
        description: 'Chestnut slab',
        rating: '5'

    },
    {
        type: 'Wooden',
        description: 'Oak and Pine Mix',
        rating: '9'

    }

]

module.exports ={
    seedCheese,
    seedUser,
    seedBoard
};