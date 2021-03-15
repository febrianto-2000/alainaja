const mongoose = require('mongoose');
require('dotenv').config();

const initDb = () => {
        const host = process.env.DB_HOST;
        const user = process.env.DB_USERNAME;
        const pass = process.env.DB_PASSWORD;
        const dbName = process.env.DB_NAME;
        mongoose.connect(`mongodb+srv://${user}:${pass}@${host}/${dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true , logger: true, useUnifiedTopology: true})
        .then((conn) => {
            console.log("db connected");
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    initDb
}