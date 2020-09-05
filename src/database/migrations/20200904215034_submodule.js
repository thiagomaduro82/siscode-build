
exports.up = function(knex) {
    return knex.schema.createTable('submodule', (table) => {
        table.increments('id')
        table.string('description', 80).notNullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('submodule')
};
