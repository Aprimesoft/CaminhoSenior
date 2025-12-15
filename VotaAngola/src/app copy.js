import express from 'express'
import {AppError} from './errors/AppError.js'
const app = express()

app.use(express.json()) //permitir que a leitura de dados em formato JSON



//rota principal da aplicação
app.get('/t',(req,res, next)=>{
  const ok = true

  if (!ok) {
    //throw new AppError('Usuário não encontrado', 404)
    return next(new AppError('Algo deu errado', 400))
  }

})

// 
app.use((error,req,res,next)=>{
    res.status(error.message || 500).json({
        message:error.message
    })
})

export {app}