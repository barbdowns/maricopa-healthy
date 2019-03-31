exports.up = function (knex, Promise) {
  return knex.schema.createTable("Subscriptions", table => {
    table.increments();
    // todo: add table columns
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("Subscriptions");
};
