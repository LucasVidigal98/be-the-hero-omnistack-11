
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); //primary key auto-increment

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Relation
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs'); //Foreign key
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
