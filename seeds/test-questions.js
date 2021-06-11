
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('question-answer').del()
    .then(function () {
      // Inserts seed entries
      return knex('question-answer').insert([
        {id: 1, question: 'What was the 1st human invention to break the sound barrier?', choiceA: 'plane', choiceB: 'rocket', choiceC: 'whip',choiceD: 'bullet', correct_choice: 'choiceC', categories_id: '1' },
        {id: 2, question: 'Who assassinated John Lennon?', choiceA: 'Mark Chapman', choiceB: 'Yoko Ono', choiceC: 'John Darwin',choiceD: 'Dave Grohl', correct_choice: 'choiceA', categories_id: '1' },
        {id: 3, question: 'How many groves are on one side of an LP record?', choiceA: '3', choiceB: '5', choiceC: '2',choiceD: '1', correct_choice: 'choiceD', categories_id: '2' },
        {id: 4, question: 'How many black keys on a standard piano?', choiceA: '36', choiceB: '40', choiceC: '28',choiceD: '32', correct_choice: 'choiceA', categories_id: '2' },
        {id: 5, question: 'How many emirates make up the United Arab Emerates?', choiceA: '3', choiceB: '5', choiceC: '7',choiceD: '8', correct_choice: 'choiceC', categories_id: '3' },
        {id: 6, question: 'How many american states have the letter x in them?', choiceA: '3', choiceB: '1', choiceC: '4',choiceD: '2', correct_choice: 'choiceD', categories_id: '3' },
        {id: 7, question: 'In what year and in whatcountry was the first FIFI world cup held?', choiceA: '1930, Uruguay', choiceB: '1924, Germany', choiceC: '1920, England',choiceD: '1950, Austria', correct_choice: 'choiceA', categories_id: '4' },
        {id: 8, question: 'What is the maximum number of horses allowed to run the grand national?', choiceA: '50', choiceB: '44', choiceC: '30',choiceD: '40', correct_choice: 'choiceD', categories_id: '4' },
        {id: 9, question: 'In the board game Risk what colour is Europe?', choiceA: 'Green', choiceB: 'Red', choiceC: 'Yellow',choiceD: 'Blue', correct_choice: 'choiceD', categories_id: '5' },
        {id: 10, question: 'Chronophobia is a fear of what?', choiceA: 'metal', choiceB: 'time', choiceC: 'kronos',choiceD: 'dates', correct_choice: 'choiceB', categories_id: '5' },
      ]);
    });
};

