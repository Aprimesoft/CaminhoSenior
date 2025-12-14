import express from 'express'
const app = express()

app.use(express.json()) //permitir que a leitura de dados em formato JSON

//rota principal da aplicação
app.get('/',(req,res)=>{
    res.json({message:'API vote angola'})
})

export {app}