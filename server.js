const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var databaseToUse = ""

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));
// 	databaseToUse = "mongodb://gabe:a123456@ds133601.mlab.com:33601/heroku_nf0ztkqg";
}
// else {
// 	databaseToUse = 'mongodb://localhost/reactBoilerplate';
// 	console.log("DEVELOPMENT")
// }


app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://gabe:a123456@ds133231.mlab.com:33231/heroku_5vfx1n8w';


mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
	console.log(`App running on port ${PORT}`);
});
