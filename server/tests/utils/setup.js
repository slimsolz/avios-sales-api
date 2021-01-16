import jwt from "jsonwebtoken";
import faker from "faker";

export const validSellerToken = `Bearer ${jwt.sign(
  { id: 1, email: "seller@gmail.com", role: "seller" },
  process.env.SECRET,
  { expiresIn: process.env.TOKEN_EXPIRATION }
)}`;
export const validBuyerToken = `Bearer ${jwt.sign(
  { id: 1, email: "seller@gmail.com", role: "buyer" },
  process.env.SECRET,
  { expiresIn: process.env.TOKEN_EXPIRATION }
)}`;
export const expiredToken = `Bearer ${jwt.sign({ id: 1 }, process.env.SECRET, {
  expiresIn: 1,
})}`;
export const invalidToken = `Bearer ${jwt.sign({}, process.env.SECRET, {
  expiresIn: 86400,
})}`;
export const wrongSecretToken = `Bearer ${jwt.sign({ id: 1 }, "fakesecret", {
  expiresIn: 86400,
})}`;

export const buyer = {
  firstName: "Buyer",
  lastName: "Buyer",
  email: "buyer@gmail.com",
  password: "Pa$$word12",
  role: "buyer",
};

export const seller = {
  firstName: "Seller",
  lastName: "Seller",
  email: "seller@gmail.com",
  password: "Pa$$word12",
  role: "seller",
};

export const productDetails = {
  name: faker.name.lastName(),
  quantity: faker.random.number(99),
  size: faker.random.arrayElement(["s", "L", "XL"]),
  color: faker.random.arrayElement(["red", "green", "blue", "white", "grey"]),
  price: faker.random.number(10000),
  description: faker.lorem.paragraph(),
};

export const updatedProductDetails = {
  name: faker.name.firstName(),
  quantity: faker.random.number(99),
  size: faker.random.arrayElement(["s", "L", "XL"]),
  color: faker.random.arrayElement(["red", "green", "blue", "white", "grey"]),
  price: faker.random.number(10000),
  description: faker.lorem.paragraph(),
};

export const productWithMissingField = {
  quantity: faker.random.number(99),
  size: faker.random.arrayElement(["s", "L", "XL"]),
  color: faker.random.arrayElement(["red", "green", "blue", "white", "grey"]),
  price: faker.random.number(10000),
  description: faker.lorem.paragraph(),
};
