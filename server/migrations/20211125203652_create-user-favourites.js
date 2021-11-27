
exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id'); //primary key
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
    }).createTable('favourite-recipes', (table) => {
        table.string('id').notNullable(); 
        table.integer('user_id').unsigned().notNullable();
        table.string('uri').notNullable();
        table.string('label').notNullable();
        table.string('image').notNullable();
        table.integer('yield');
        table.json('dietLabels');
        // table.json('healthLabels');
        // table.json('ingredientLines');
        table.integer('calories').notNullable();
        table.integer('totalTime');
        // table.json('cuisineType');
        // table.json('mealType');
        // table.json('dishType');
        table
            .foreign('user_id')
            .references('id')
            .inTable('user')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('favourite_recipes').dropTable('user');
};
