
exports.up = function(knex) {
    return knex.schema.createTable('adminusers', (table) => {
        table.increments('id')
        table.string('name',100).notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('adminusers')
  
};
