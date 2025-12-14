import {Sequelize} from 'sequelize'
import {env} from './env.js'

//Autenticar-se ao banco de dados
export const conectionDB = new Sequelize(
    env.database.name,
    env.database.user,
    env.database.password,
    {
        host:env.database.host,
        dialect:env.database.dialect,
        logging:false
    }
)