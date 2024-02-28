/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("exercises_log", function(table) {
        table.increments();

        table.integer("exercise_id").notNullable().unsigned();
        table
            .foreign("exercise_id")
            .references("exercises.id");

        table.integer("set_id").notNullable().unsigned();
        table
            .foreign("set_id")
            .references("sets_log.id");

        table.double("weight").notNullable().defaultTo(0.0);
        table.integer("reps").notNullable().defaultTo(0);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("exercises_log");
};
