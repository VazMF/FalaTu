const mysql = require('mysql')

const settings = require('../settings')

const database = mysql.createConnection({
    host: settings.DB_HOST,
    user: settings.DB_USER,
    password: settings.DB_PASS,
    port: settings.DB_PORT,
    database: settings.DB_DATABASE,
    multipleStatements: true
});

database.connect(function(err) {
    if(err) throw err;
    console.log('Database connected!');
})

module.exports = database;
