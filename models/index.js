var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todos');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");