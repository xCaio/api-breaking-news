const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    const soma = 1+2
    res.send({soma: soma})
})
app.listen(3000, '', console.log("Servidor inicializado"))  