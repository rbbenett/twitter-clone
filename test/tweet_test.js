const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "localhost:3004"
chai.use(chaiHttp);
describe("Tweet API Unit Test", function () {
  const newTweet = {
    "user_id": "1",
    "text": "This is a test tweet!"
  };

  const updatedTweet = {
    "id": "1",
    "text": "This is an updated tweet!"
  }

  const deletedTweet = {
    "id": "2"
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

  it ('gets all tweets', function(done) {
    chai.request(baseUrl)
    .get('/tweets')
    .end(function (err, res) {
      expect(res).to.have.status(200);;
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
      .send(deletedTweet)
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("tweet deleted successfully!");
        done();
      });
  });

})