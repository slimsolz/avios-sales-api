'use strict';

var bcrypt = require('bcrypt');

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      firstName: 'Admin',
      lastName: 'Seller',
      password: bcrypt.hashSync('Password@1234', 10),
      role: 'seller',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users');
  }
};