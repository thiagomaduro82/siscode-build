
exports.up = function(knex) {
    return knex.schema.createTable('receipts', (table) => {
        table.increments('id')
        table.datetime('date').defaultTo(knex.fn.now())
        table.decimal('value',14,2)
        table.string('idexternal').notNullable()
        table.string('status').notNullable()
        table.integer('acquisitionId', 10).unsigned()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
        table.foreign('acquisitionId').references('acquisition.id').onDelete('RESTRICT')
    })  
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('receipts')
  
};
