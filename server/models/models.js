
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: String,
    time:String,
    isComplete:Boolean
    
})

const Task = mongoose.model('task',TaskSchema)

module.exports = Task