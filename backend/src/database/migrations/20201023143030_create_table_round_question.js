
exports.up = function(knex) {
    return knex.schema.createTable('round_question',function(table){
        table.integer('round_id').unsigned()        
        table.integer('question_id').unsigned()        
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('round_question')
  };
  