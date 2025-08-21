const express = require('express')
const app = express()
const userRouter = require('./src/routes/user.routes')

app.use('/soma', userRouter)

app.listen(3000)