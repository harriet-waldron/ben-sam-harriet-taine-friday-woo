const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getCategory(db = connection) {
  return db('categories').select()
}

function getOneCategory(db = connection) {
  return db('categories')
  // .where('categories.id', id)
  .join('question-answer', 'question-answer.categories_id', 'categories.id')
  .then(result => {
    console.log(result)
  })
}


module.exports = {
  getCategory,
  getOneCategory
}