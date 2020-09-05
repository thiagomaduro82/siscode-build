
exports.up = function(knex) {
    return knex.schema.createTable('profile', (table) => {
        table.increments('id')
        table.string('description', 80).notNullable()
        table.integer('customersId',10).unsigned()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
        table.foreign('customersId').references('customers.id').onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('profile')
};
