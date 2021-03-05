const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "localhost:3004"
chai.use(chaiHttp);
describe("Register User API Unit Test", function () {
  let userNum = Math.floor(Math.random() * 100) + 1
  let newUser = {
    "username": `user${userNum}`,
    "password": "password"
  };
  it('registers a user', function (done) {
    chai.request(baseUrl)
      .post('/register')
      .send(newUser)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal(`${newUser.username} created successfully!`);
        done();
      });
  });
})