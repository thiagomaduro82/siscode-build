
exports.up = function(knex) {
    return knex.schema.createTable('acquisition', (table) => {
        table.increments('id')
        table.datetime('date').defaultTo(knex.fn.now())
        table.integer('customersId', 10).unsigned()
        table.integer('plansId',10).unsigned()
        table.datetime('shelflife')
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
        table.foreign('customersId').references('customers.id').onDelete('RESTRICT')
        table.foreign('plansId').references('plans.id').onDelete('RESTRICT')
    })  
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('acquisition')
};
