import express from 'express'
import {AppError} from './errors/AppError.js'
const app = express()

app.use(express.json()) //permitir que a leitura de dados em formato JSON


//ROTA PRINCIPAL DA APLICAÇÃO
app.get('/', (req, res, next) => {
  const ok = true

  if (!ok) {
    return next(new AppError('Algo deu errado dgdfdd', 400))
  }

  res.send('Tudo certo')

})

//TRATAMENTO DE ERRO DE FORMA GERAL
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    message: error.message
  })
})

export {app}