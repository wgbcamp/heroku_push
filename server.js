const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var databaseToUse = ""

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));
	databaseToUse = "mongodb://gabe:password1@ds129010.mlab.com:29010/heroku_x24s95zn";
}
else {
	databaseToUse = 'mongodb://localhost/reactBoilerplate';
}


app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || databaseToUse;


mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
	console.log(`App running on port ${PORT}`);
});
