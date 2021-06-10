const express = require('express')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Your routes/router(s) should go heres
server.get('/', (req, res) => {
  res.sendFile('./index.html')
})

module.exports = server