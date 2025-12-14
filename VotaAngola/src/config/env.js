import dotenv  from 'dotenv'
dotenv.config()

export const env = {
    port: process.env.PORT,

    database:{
        host:process.env.DB_HOST,
        name:process.env.DB_NAME,
        user:process.env.DB_USER,
        password: process.env.DB_PASS,
        dialect:process.env.DB_DIALECT
    }
}