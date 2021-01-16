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
