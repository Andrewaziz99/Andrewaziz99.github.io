const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;
const db_conn = mongoose.connect('mongodb+srv://andrewaziz:Andrewaziz99@cluster0.0odvs5n.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas!');
    }
    );





module.exports = {
    db_conn: db_conn,

};