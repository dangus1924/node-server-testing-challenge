
exports.up = async function(knex) {
  await knex.schema.createTable('color', (table) => {
      table.increments('id')
      table.text('color').notNullable().unique()
      table.string('description', 240).notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExist('color')
};
