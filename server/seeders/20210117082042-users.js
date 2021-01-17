const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    email: 'admin@gmail.com',
    firstName: 'Admin',
    lastName: 'Seller',
    password: bcrypt.hashSync('Password@1234', 10),
    role: 'seller',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users')
};
