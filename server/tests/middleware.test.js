import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import "babel-polyfill";

import { productDetails, validBuyerToken } from "./utils/setup";

const { expect } = chai;
chai.use(chaiHttp);

describe("authentication", () => {
  it("should return 401 when user not logged in", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/products")
      .send(productDetails)
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTI3MTM3NjQ2LCJleHAiOjE1MjcyMjQwNDZ9.0J2YZ8LAUpEnauDvl21U2OjHIQjRBzR70PlLVvNPD9trcs"
      );
    expect(res).to.have.status(401);
  });
  it("should return 401 when key is not set", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/products")
      .send(productDetails);
    expect(res).to.have.status(401);
    expect(res.body.message).to.equal("Unauthorized Access");
  });

  it("should return 403 if user is not a seller", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/products")
      .send(productDetails)
      .set("Authorization", `Bearer ${validBuyerToken}`);
    expect(res).to.have.status(403);
  });
});

describe("validate Parameter", () => {
  it("should return 422 for invalid params", async () => {
    const res = await chai.request(app).get("/api/v1/product/-1");
    expect(res).to.have.status(422);
  });

  it("should return 422 for invalid seller params", async () => {
    const res = await chai.request(app).get("/api/v1/products/user/-1");
    expect(res).to.have.status(422);
  });
});
