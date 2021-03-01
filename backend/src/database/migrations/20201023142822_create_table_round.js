
exports.up = function(knex) {
    return knex.schema.createTable('round',function(table){
        table.increments('id').primary();
        table.string('username',50).notNullable();
        table.integer('score').defaultTo(0);        
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('round')
  };
  