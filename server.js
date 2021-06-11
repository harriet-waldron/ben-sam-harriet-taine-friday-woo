const express = require('express')
const db = require("./db")
const path = require("path")
const server = express()

// Server configuration
server.use('/static', express.static(__dirname + '/static'))
server.use(express.urlencoded({ extended: false }))

// Your routes/router(s) should go heres
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

server.get('/get-question/:category_id', (request, response) => {
  let { category_id } = request.params
  db.getOneQuestion(category_id).then((question) => {
    console.log(question)
    response.send(JSON.stringify(question))
  })
})

server.get("/quiz", (_, response) => {
  response.sendFile(path.join(__dirname, "quiz.html"))
})

module.exports = server