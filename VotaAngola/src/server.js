import {app} from './app.js' //nossa aplicação principal
import {env} from './config/env.js'
import {conectedDatabase} from './database/index.js'


//criando o servidor
async function server(){

    await conectedDatabase()

    app.listen(env.port,()=>{
        console.log(`🚀 Servidor Rodante em http://localhost:${env.port}`)
    })
}

//
server()