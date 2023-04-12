import { createConnection } from 'mysql';
import { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_DATABASE } from '../settings';

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
