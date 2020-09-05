
exports.up = function(knex) {
    return knex.schema.createTable('customers', (table) => {
        table.increments('id')
        table.string('name', 100).notNullable()
        table.string('cpfcnpj',18).notNullable()
        table.string('rgie',20).notNullable()
        table.string('cep',9).notNullable()
        table.string('address',100).notNullable()
        table.string('number',10).notNullable()
        table.string('complement',50)
        table.string('neighborhood',80).notNullable()
        table.string('city',80).notNullable()
        table.string('state',2).notNullable()
        table.string('phone1').notNullable()
        table.string('contact',60)
        table.string('email').notNullable()
        table.string('site')
        table.boolean('blocked').notNullable().defaultTo(false)
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('customers')
};
