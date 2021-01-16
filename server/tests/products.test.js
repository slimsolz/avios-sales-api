import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import "babel-polyfill";
import {
  validSellerToken,
  productDetails,
  updatedProductDetails,
} from "./utils/setup";

const { expect } = chai;
chai.use(chaiHttp);

describe("Products", () => {
  it("should return 201 and successfully add a new product", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/products")
      .set("Authorization", `Bearer ${validSellerToken}`)
      .send(productDetails);
    expect(res).to.have.status(201);
    expect(res.body).to.be.an("object");
  });

  it("should return 200 and get all products", async () => {
    const res = await chai.request(app).get("/api/v1/products");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });

  it("should return 200 and get a single seller", async () => {
    const res = await chai.request(app).get("/api/v1/products/user/1");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });

  it("should return 404 and fail to get product", async () => {
    const res = await chai.request(app).get("/api/v1/product/10000");
    expect(res).to.have.status(404);
    expect(res.body.message).to.be.equal("product not found");
  });

  it("should return 200 and successfully update a product", async () => {
    const res = await chai
      .request(app)
      .patch("/api/v1/product/1")
      .set("Authorization", `Bearer ${validSellerToken}`)
      .send(updatedProductDetails);
    expect(res).to.have.status(200);
  });

  it("should return 404 and fail update a product", async () => {
    const res = await chai
      .request(app)
      .patch("/api/v1/product/10000")
      .set("Authorization", `Bearer ${validSellerToken}`)
      .send(updatedProductDetails);
    expect(res).to.have.status(404);
    expect(res.body.message).to.be.equal("product not found");
  });

  it("should return 200 and delete a single product", async () => {
    const res = await chai
      .request(app)
      .delete("/api/v1/product/1")
      .set("Authorization", `Bearer ${validSellerToken}`);
    expect(res).to.have.status(200);
  });

  it("should return 404 and fail to delete product", async () => {
    const res = await chai
      .request(app)
      .delete("/api/v1/product/10000")
      .set("Authorization", `Bearer ${validSellerToken}`);
    expect(res).to.have.status(404);
    expect(res.body.message).to.be.equal("product not found");
  });
});
