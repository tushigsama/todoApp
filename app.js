const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/todoTraining", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});