import chai from "chai";
import chaiHttp from "chai-http";
import faker from "faker";
import app from "../index";
import "babel-polyfill";
import { buyer, seller } from "./utils/setup";

const { expect } = chai;
chai.use(chaiHttp);

let token;

describe("POST users", () => {
  it("should return 201 and successfully register a new seller", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/auth/register")
      .send(seller);
    expect(res).to.have.status(201);
    expect(res.body).to.be.an("object");
  });

  it("should return 201 and successfully register a new buyer", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/auth/register")
      .send(buyer);
    expect(res).to.have.status(201);
    expect(res.body).to.be.an("object");
  });

  it("should return 409 and fail to create user", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/auth/register")
      .send(buyer);
    expect(res).to.have.status(400);
  });

  it("should return 200 and successfully log a user in", async () => {
    const res = await chai.request(app).post("/api/v1/auth/login").send({
      email: buyer.email,
      role: buyer.role,
      password: buyer.password,
    });
    token = res.body.token;
    expect(res).to.have.status(200);
    expect(res.body.data).to.be.an("object");
    expect(res.body.message).to.be.equal("login successful");
  });

  it("should return 400 and not log an user in", async () => {
    const res = await chai.request(app).post("/api/v1/auth/login").send({
      email: buyer.email,
      role: buyer.role,
      password: "Pa$$word0",
    });
    expect(res).to.have.status(400);
    expect(res.body.message).to.be.equal("email or password is invalid");
  });

  it("should return 400 and not log an user in", async () => {
    const res = await chai.request(app).post("/api/v1/auth/login").send({
      email: faker.internet.email(),
      role: buyer.role,
      password: buyer.password,
    });
    expect(res).to.have.status(400);
    expect(res.body.message).to.be.equal("email or password is invalid");
  });
});
