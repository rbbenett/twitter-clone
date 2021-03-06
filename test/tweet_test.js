const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "localhost:3004"
chai.use(chaiHttp);
describe("Tweet API Unit Test", function () {
  const newTweet = {
    "user_id": "1",
    "content": "This is a test tweet!"
  };

  const updatedTweet = {
    "user_id": "1",
    "content": "This is an updated tweet!"
  }

  it('creates a new tweet', function (done) {
    chai.request(baseUrl)
      .post('/tweets')
      .send(newTweet)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("tweet created successfully!");
        done();
      });
  });

  it('updates an existing tweet', function (done) {
    chai.request(baseUrl)
      .put('/tweets')
      .send(updatedTweet)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("tweet updated successfully!");
        done();
      });
  });

  it('deletes an existing tweet', function (done) {
    chai.request(baseUrl)
      .delete('/tweets')
      .send(updatedTweet)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("tweet deleted successfully!");
        done();
      });
  });

})