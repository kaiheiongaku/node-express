
exports.up = function(knex, Promis) {
  return Promise.all([
    knex.schema.createTable('papers', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');

      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('footnotes'),
    knex.schema.dropTable('papers')
  ]);
}
