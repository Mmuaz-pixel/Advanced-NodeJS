
// ORM - Object Relaional Mapping  is used while dealing with a relational database server. e.g Sequelize 
// ODM - Object Document Mapping  is used while dealing with a non-relational database server. e.g Mongoose

// orm and odm are used widely instead of queries to prevent sql injections. They have built in injection detecting methods


// ORM example 

const Sequelize = require('sequelize');

// Define the model
const User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING
	}
});

// Create a new user
User.create({
	firstName: 'John',
	lastName: 'Doe'
}).then(newUser => {
	console.log(newUser.toJSON());
});

// Querying users
User.findAll().then(users => {
	console.log(users.map(user => user.toJSON()));
});


// ODM example 

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema
const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: String
});

// Create a model
const User2 = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({
	firstName: 'Jane',
	lastName: 'Doe'
});

newUser.save().then(() => {
	console.log(newUser.toJSON());
});

// Querying users
User.find().then(users => {
	console.log(users.map(user => user.toJSON()));
});
