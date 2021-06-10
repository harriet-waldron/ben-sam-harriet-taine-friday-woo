exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, title: 'history'},
        {id: 2, title: 'music'},
        {id: 3, title: 'geography'},
        {id: 4, title: 'sport'},
        {id: 5, title: 'general-knowledge'},
      ]);
    });
};
