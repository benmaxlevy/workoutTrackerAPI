/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("exercises", function(table) {
      table.increments();
      table.string("exercise").notNullable();
      // the following columns will be updated each time a log is added
      table.double("lastWeight").notNullable().defaultTo(0.0);
      table.integer("lastReps").notNullable().defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("exercises");
};
