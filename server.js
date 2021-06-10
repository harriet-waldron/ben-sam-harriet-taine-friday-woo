const express = require('express')

const server = express()

// Server configuration
server.use('/static', express.static(__dirname + '/static'))
server.use(express.urlencoded({ extended: false }))

// Your routes/router(s) should go heres
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

module.exports = server