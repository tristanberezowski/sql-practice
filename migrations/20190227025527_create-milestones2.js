
exports.up = function(knex, Promise) {
  return knex.schema.table("milestones", function(table) {
    table.integer("famous_people_id").references("id").inTable("famous_people");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pastries'); 
};