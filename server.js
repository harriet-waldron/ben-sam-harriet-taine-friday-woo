const express = require('express')
const db = require('./db')
const server = express()
const hbs = require('express-handlebars')

// Server configuration
server.use('/static', express.static(__dirname + '/static'))
server.use(express.urlencoded({ extended: false }))
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')


server.get('/', (req, res) => {
  db.getAllCategories()
  res.sendFile(__dirname + '/index.html')
})

module.exports = server