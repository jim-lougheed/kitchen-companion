exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id'); //primary key
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('shoppingList')
        table.string('dietaryRestriction')
    }).createTable('favourite-recipes', (table) => {
        table.string('id').notNullable(); 
        table.integer('user_id').unsigned().notNullable();
        table.string('summary').notNullable().v;
        table.string('title').notNullable();
        table.string('image').notNullable();
        table.json('analyzedInstructions');
        table.json('cuisines');
        table.boolean('dairyFree');
        table.json('diets');
        table.json('dishTypes');
        table.json('extendedIngredients');
        table.boolean('glutenFree');
        table.integer('servings');
        table.integer('readyInMinutes');
        table.boolean('vegan');
        table.boolean('vegetarian');
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