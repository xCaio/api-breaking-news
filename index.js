const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./src/routes/user.routes')
const connectDataBase = require('./src/database/db')


connectDataBase()
app.use(express.json())
app.use('/user', userRouter)
app.listen(3000, ()=> console.log(`Servidor rodando na porta: ${port}`))