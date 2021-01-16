import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import "babel-polyfill";

const { expect } = chai;
chai.use(chaiHttp);

const user = {
  lastName: "Buyer",
  role: "buyer",
  email: "test@gmail.com",
  password: "Pas$word23",
};

describe("User Validations", () => {
  it("should return 422 for missing field", async () => {
    const res = await chai
      .request(app)
      .post("/api/v1/auth/register")
      .send(user);
    expect(res).to.have.status(422);
    expect(res.body.message).to.be.equal('"firstName" is required');
  });

  it("should return 422 for invalid field", async () => {
    const res = await chai.request(app).post("/api/v1/auth/register").send({
      firstName: "Seller",
      lastName: "Seller",
      email: "test@gmail.com",
      password: "Pas$word",
      role: "buyer",
    });
    expect(res).to.have.status(422);
    expect(res.body.message).to.be.equal(
      "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
  });

  it("should return 422 for invalid field", async () => {
    const res = await chai.request(app).post("/api/v1/auth/login").send({
      email: "test@gmail.com",
      password: "Pas$word",
      role: "buyer",
    });
    expect(res).to.have.status(422);
    expect(res.body.message).to.be.equal(
      "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
  });
  -it("should return 422 for missing email", async () => {
    const res = await chai.request(app).post("/api/v1/auth/login").send({
      password: "Pas$word",
      role: "buyer",
    });
    expect(res).to.have.status(422);
    expect(res.body.message).to.be.equal('"email" is required');
  });
});
