
exports.up = function(knex) {
    return knex.schema.createTable('access', (table) => {
        table.increments('id')
        table.integer('profileId', 10).unsigned()
        table.integer('submodulesId',10).unsigned()
        table.boolean('insert').defaultTo(true)
        table.boolean('delete').defaultTo(true)
        table.boolean('update').defaultTo(true)
        table.boolean('query').defaultTo(true)
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
        table.foreign('profileId').references('profile.id').onDelete('RESTRICT')
        table.foreign('submodulesId').references('submodule.id').onDelete('RESTRICT')
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('access')  
};
