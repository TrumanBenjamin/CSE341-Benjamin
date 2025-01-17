var express = require('express');
var app = express();
const MongoClient = require('mongoDb');
const mongodb = require ('./db/connect');

const port = process.env.PORT || 3000

app.use('/', require('./routes'))

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});