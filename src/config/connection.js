require('dotenv').config()
const mssql = require('mssql')

const {USER,PASSWORD,HOST,DATABASE,PORT} = process.env

        const config = {
            user: USER,
            password: PASSWORD,
            server: HOST,
            database: DATABASE,
            port: Number(PORT),

            options: {
                encrypt: false
            }
        };


module.exports = config;