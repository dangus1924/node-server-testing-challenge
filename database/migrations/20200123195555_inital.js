
exports.up = async function(knex) {
  await knex.schema.createTable('color', (table) => {
      table.increments('id')
      table.string('color').notNullable().unique()      
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('color')
};
