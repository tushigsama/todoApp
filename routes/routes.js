const express = require('express');

const app = express.Router();
const todo = require('../models/todo');

app.get('/',async(req,res) => {
    const allTodo = await todo.find();
})