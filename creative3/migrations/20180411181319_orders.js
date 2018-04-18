exports.up = function(knex, Promise) {
      return Promise.all([
      knex.schema.createTable('orders', function(table) {
      table.integer('userID').unsigned().references('id').inTable('users');
      table.string('flavor');
      table.string('time');
      table.integer('orderNumber');
      table.integer('totalOrders');
               }),
      ]);
};


exports.down = function(knex, Promise) {
     return Promise.all([
     knex.schema.dropTable('orders'),
                       ]);
};
