const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "localhost:3004"
chai.use(chaiHttp);
describe("Login User API Unit Test", function () {
  let currentUser = {
    "username": "rbenett",
    "password": "password"
  };
  let badUser = {
    "username": "user",
    "password": "password"
  }
  it('logs in a registered user', function (done) {
    chai.request(baseUrl)
      .post('/login')
      .send(currentUser)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Login Successfull!");
        done();
      });
  });
  it('returns an error if user does not exist', function (done) {
    chai.request(baseUrl)
      .post('/login')
      .send(badUser)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Username or Password is Incorrect!");
        done();
      });
  });
})