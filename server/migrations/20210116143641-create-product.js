module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      product_description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      product_varieties: {
        allowNull: false,
        type: Sequelize.JSON,
        get() {
          return JSON.parse(this.getDataValue(Products));
        },
        set(value) {
          this.setDataValue(Products, JSON.stringify(value));
        },
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
