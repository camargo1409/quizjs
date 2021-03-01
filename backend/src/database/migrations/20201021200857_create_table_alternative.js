
exports.up = function(knex) {
    return knex.schema.createTable('alternative',function(table){
        table.increments('id').primary();
        table.string('text',255).notNullable();
        table.integer('question_id').unsigned();
        table.boolean('is_correct').defaultTo(false)
  
        table.foreign('question_id').references('question.id').onDelete('cascade')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('alternative')
  };
  