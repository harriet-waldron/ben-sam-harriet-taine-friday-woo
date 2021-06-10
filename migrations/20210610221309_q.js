

exports.up = function(knex) {
  return knex.schema.createTable('question-answer', (table) => {
    table.increments('id').primary()
    table.string('question')
    table.string('choiceA')
    table.string('choiceB')
    table.string('choiceC')
    table.string('choiceD')
    table.string('correct_choice')
    table.integer('categories_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('question-answer')
};

