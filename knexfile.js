const settings = require('./settings')

const development = {
    client: 'mysql',
    connection: {
        host: settings.DB_HOST,
        user: settings.DB_USER,
        password: settings.DB_PASS,
        port: settings.DB_PORT,
        database: settings.DB_DATABASE
    },
    debug: true
};

module.exports = development
