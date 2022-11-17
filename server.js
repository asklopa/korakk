const express = require('express');
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.port || 5300

http.listen(PORT,() => {
    console.log(`Listening on Port ${PORT}`)
})

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

