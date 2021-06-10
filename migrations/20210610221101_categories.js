const { table } = require("node:console");

exports.up = function(knex) {
  return knex.schema.createTable('categories', () => {
    table.increments('id').primary()
    table.toString('title')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories')
};
