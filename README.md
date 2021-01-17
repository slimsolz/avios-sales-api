# Avios-sales-api

Avios provides a platform where buyers meet sellers. Avios wants to allow sellers add variants to their product while uploading.

## Features

- Register: `POST api/v1/auth/register`
- Login: `POST api/v1/auth/login`
- Add Product: `POST api/v1/products`
- Get all Products: `POST api/v1/products`
- Get single Product: `GET api/v1/product/:id`
- Get seller Product: `GET api/v1/product/user/:id`
- Delete single Product: `DELETE api/v1/product/:id`
- Update single Product: `PATCH api/v1/product/:id`

## Technologies

- Node
- Express
- Mysql
- Cloudinary
- Mocha
- Chai
- Chai-http

## Getting Started

- Install composer on your computer
- Clone this repository using git clone `https://github.com/slimsolz/avios-sales-api.git`
- Use the .env.example file to setup your environmental variables and rename the file to .env
- Interact with localhost:[PORT] in POSTMAN to access the application

## Seller

## Buyer

## Dependencies

- Express JS: Web application framework for Node.js.
- Body-Parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body property

## Dev Dependencies

- Eslint: Linting utility for JavaScript and JSX
- Babel: The compiler for writing next generation JavaScript.
- Mocha & Chai: Testing the Web Application
- Chai: TDD assertion library for node
- Nodemon: Utility that will monitor for any changes in your source and automatically restart your server.
