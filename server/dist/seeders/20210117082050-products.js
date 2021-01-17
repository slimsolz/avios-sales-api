"use strict";

var bcrypt = require("bcrypt");

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [{
      product_name: "Test",
      product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum a enim nec faucibus. Aliquam erat volutpat. Vestibulum tincidunt ligula interdum tortor ullamcorper commodo. Praesent aliquet lobortis nunc, at fringilla augue porta id. Sed quis ante diam. Sed et ligula id lacus faucibus laoreet. Suspendisse gravida velit vitae accumsan posuere. Suspendisse vitae ligula libero.",
      product_varieties: JSON.stringify({
        size: "XL",
        color: "red",
        quantity: 300,
        price: 1000,
        image: [{
          url: "https://res.cloudinary.com/dhscfltvv/image/upload/v1533170126/sample.jpg",
          id: "23"
        }]
      }),
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_name: "Test 2",
      product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum a enim nec faucibus. Aliquam erat volutpat. Vestibulum tincidunt ligula interdum tortor ullamcorper commodo. Praesent aliquet lobortis nunc, at fringilla augue porta id. Sed quis ante diam. Sed et ligula id lacus faucibus laoreet. Suspendisse gravida velit vitae accumsan posuere. Suspendisse vitae ligula libero.",
      product_varieties: JSON.stringify({
        size: "XL",
        color: "red",
        quantity: 300,
        price: 1000,
        image: [{
          url: "https://res.cloudinary.com/dhscfltvv/image/upload/v1533170126/sample.jpg",
          id: "23"
        }]
      }),
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_name: "Test 3",
      product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum a enim nec faucibus. Aliquam erat volutpat. Vestibulum tincidunt ligula interdum tortor ullamcorper commodo. Praesent aliquet lobortis nunc, at fringilla augue porta id. Sed quis ante diam. Sed et ligula id lacus faucibus laoreet. Suspendisse gravida velit vitae accumsan posuere. Suspendisse vitae ligula libero.",
      product_varieties: JSON.stringify({
        size: "XL",
        color: "red",
        quantity: 300,
        price: 1000,
        image: [{
          url: "https://res.cloudinary.com/dhscfltvv/image/upload/v1533170126/sample.jpg",
          id: "23"
        }]
      }),
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_name: "Test 4",
      product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum a enim nec faucibus. Aliquam erat volutpat. Vestibulum tincidunt ligula interdum tortor ullamcorper commodo. Praesent aliquet lobortis nunc, at fringilla augue porta id. Sed quis ante diam. Sed et ligula id lacus faucibus laoreet. Suspendisse gravida velit vitae accumsan posuere. Suspendisse vitae ligula libero.",
      product_varieties: JSON.stringify({
        size: "XL",
        color: "red",
        quantity: 300,
        price: 1000,
        image: [{
          url: "https://res.cloudinary.com/dhscfltvv/image/upload/v1533170126/sample.jpg",
          id: "23"
        }]
      }),
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products");
  }
};