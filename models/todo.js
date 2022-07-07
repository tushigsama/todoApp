const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    deadline: Date,
    doing: Boolean,
    done: Boolean,
    priority: Number
});

module.exports = new mongoose.model("todo", todoSchema);