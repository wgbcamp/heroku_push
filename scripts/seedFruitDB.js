const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;


var databaseToUse = ""

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));
	databaseToUse = "mongodb://gabe:a123456@ds133231.mlab.com:33231/heroku_5vfx1n8w";
}
else {
	databaseToUse = 'mongodb://localhost/reactBoilerplate';
}

// This file empties the Fruits collection and inserts the Fruits below
mongoose.connect(process.env.MONGODB_URI || databaseToUse);

const itemSeed = [
	{
		item: 'Apples',
		quantity: '31',
		type: 'Fruit',
		image: './images/apple.jpg'
	},
	{
		item: 'Bananas',
		quantity: '34',
		type: 'Fruit',
		image: './images/banana.jpg'
	},
	{
		item: 'Oranges',
		quantity: '18',
		type: 'Fruit',
		image: './images/orange.jpg'
	},
	{
		item: 'Strawberries',
		quantity: '105',
		type: 'Fruit',
		image: './images/strawberries.jpg'
	},
	{
		item: 'Watermelons',
		quantity: '21',
		type: 'Fruit',
		image: './images/watermelon.jpg'
	}
];

db.Fruit
	.deleteMany({})
	.then(() => db.Fruit.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
