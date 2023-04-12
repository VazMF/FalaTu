import { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_DATABASE } from './settings';

export const development = {
    client: 'mysql',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        port: DB_PORT,
        database: DB_DATABASE
    },
    debug: true
};
