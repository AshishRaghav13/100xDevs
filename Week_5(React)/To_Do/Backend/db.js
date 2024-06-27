const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ashishraghav2468:WQi5dE1ChYd5iIAf@cluster0.jlpnbag.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo:todo
}

