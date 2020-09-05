
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.string('name',100).notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable()
        table.integer('profileId', 10).unsigned()
        table.integer('customersId',10).unsigned()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
        table.foreign('profileId').references('profile.id').onDelete('RESTRICT')
        table.foreign('customersId').references('customers.id').onDelete('RESTRICT')
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')  
};
