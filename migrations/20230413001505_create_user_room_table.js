/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("user_room", table => {
        table.increments("id").primary();
        table.integer('user_id_fk').unsigned().index().references('id').inTable('user');
        table.integer('room_id_fk').unsigned().index().references('id').inTable('room');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
