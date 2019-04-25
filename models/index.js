var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://ddy:password123@ds145786.mlab.com:45786/todos');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");