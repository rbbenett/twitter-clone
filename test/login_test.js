const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "localhost:3004"
chai.use(chaiHttp);
describe("Login User API Unit Test", function () {
  var currentUser = {
    "username": "rbenett",
    "password": "password"
  };
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
})