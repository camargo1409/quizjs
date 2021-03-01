
exports.up = function(knex) {
  return knex.schema.createTable('question',function(table){
      table.increments('id').primary();
      table.string('statement',255).notNullable();
       
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('question')
};

