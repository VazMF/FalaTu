const mysql = require('mysql')

const settings = require('./settings')

const database = createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_DATABASE,
    multipleStatements: true
});

database.connect(function(err) {
    if(err) throw err;
    console.log('Database connected!');
})

export default database;
