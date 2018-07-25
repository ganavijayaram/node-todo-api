var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
  var todo = new Todo({
  	text: req.body.text
    // "text": String(req.body.text)
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
  	console.log(e);
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

// const mongoose = require('mongoose');

// // to tell mongoose that we are using built in promise and not third party
// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength: 1,
// 		trim: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });

// var User = mongoose.model('User', {
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 1
// 	}	
// });

// var newUser = new User({
// 	email: '1@gmai.com'
// });

// newUser.save().then((doc) => {
// 	console.log('Saved user', doc);
// }, (e) => {
// 	console.log('Unable to save user');
// });

// var newTodo3 = new Todo({
// 	text: '   edit  '
// });

// var newTodo = new Todo({
// 	text: 'Cook Dinner'
// });

// var newTodo1 = new Todo({
// 	text: 'Sleep',
// 	completed: false,
// 	completedAt: new Date().getFullYear()
// });

// var newTodo3 = new Todo();
// newTodo3.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unablr to save todo');
// });