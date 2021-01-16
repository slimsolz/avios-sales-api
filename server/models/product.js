module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      product_name: { type: DataTypes.STRING, allowNull: false },
      product_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      product_varieties: { type: DataTypes.JSON, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );

  Product.associate = (models) => {
    // define association here
  };
  return Product;
};
