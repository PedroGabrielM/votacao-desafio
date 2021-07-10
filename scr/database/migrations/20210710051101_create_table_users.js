exports.up = knex => knex.schema.createTable('users', table => {
        table.increments(id)
        table.text('name').unique().notNullable()

    })

exports.down = knex => knex.schema.dropTable('users')