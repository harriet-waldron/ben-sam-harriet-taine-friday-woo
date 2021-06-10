const { table } = require("node:console");

exports.up = function(knex) {
  return knex.schema.createTable('question-answer', () => {
    table.increments('id').primary()
    table.toString('question')
    table.toString('choiceA')
    table.toString('choiceB')
    table.toString('choiceC')
    table.toString('choiceD')
    table.toString('correct-choice')
    table.integer('categories_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('question-answer')
};

