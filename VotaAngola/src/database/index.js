import {conectionDB} from '../config/database.js'

export async function conectedDatabase(){
    try {
        await conectionDB.authenticate()
        console.log('✅ Banco de Dados conectado com sucesso!')
    } catch (error) {
        console.log('❌ Falha ao tenatr Conectar-se ao Banco de Dados !')
        console.log(error.message)
        process.exit(1)
    }
}