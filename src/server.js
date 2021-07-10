const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
    ])
})

//Vai escutar nesta porta
app.listen('8081')