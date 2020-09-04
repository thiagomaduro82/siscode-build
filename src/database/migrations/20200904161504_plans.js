
exports.up = function(knex) {
    return knex.schema.createTable('plans', (table) => {
        table.increments('id')
        table.string('description').notNullable()
        table.integer('minuser').notNull()
        table.integer('maxuser').notNull()
        table.decimal('value',14,2)
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('plans');
};
