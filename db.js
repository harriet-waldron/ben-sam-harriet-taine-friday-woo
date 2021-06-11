const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getCategory(db = connection) {
  return db('categories').select()
}

function getOneCategory(id, db = connection) {
  return db('categories')
  .where('categories.id', id)
  .join('question-answer', 'question-answer.categories_id', 'categories.id')
  .then(test => {
    console.log(test)
  })
}

// function getQuestion


function getOneQuestion(category_id, db = connection) {
  return db('question-answer').where("categories_id", category_id).first()
}

module.exports = {
  getCategory,
  getOneCategory,
  getOneQuestion
}