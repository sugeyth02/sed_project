require('dotenv').config()

const db = require('./utilities/db')
const http = require('http')
const express = require('express')
const authRoute = require('./routes/Auth')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 5000

db.connect()

app.set('port', port)
app.use(express.json())
app.use(cors())

const server = http.createServer(app)
server.listen(port)

server.on('error', (error) => {
  console.error(error)
})

server.on('listening', () => {
  console.log(`Listening on port ${port}`)
})


/*app.get('/hola',(req, res)=>{
    console.log(req)

    return res.status(200).json({
        "hola":"todo gucci"
    })
})*/

app.use('/auth', authRoute)

module.exports = { app, server }