var express = require('express');
var router = express.Router();

/* GET tweets listing. */
module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM tweets;`)
      .then(data => {
        const tweets = data.rows;
        res.json({ tweets });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    let user_id = req.body.user_id;
    let content = req.body.text;
    return db.query(`
    INSERT INTO tweets (user_id, content)
    VALUES ($1, $2)
    RETURNING *;
    `, [user_id, content])
      .then(response => {
        res.send("tweet created successfully!");
        return res.rows[0];
      })
      .catch(err => {
        return console.log('query error:', err);
      });
  });

  router.put("/", (req, res) => {
    let tweets_id = req.body.id;
    let content = req.body.text;

    return db.query(`
      UPDATE tweets
      SET content = $2
      WHERE id = $1
      RETURNING *;
    `, [tweets_id, content])
      .then(response => {
        res.send("tweet updated successfully!");
      })
      .catch(err => {
        return console.log('query error:', err);
      });
  });

  router.delete("/", (req, res) => {

    let tweet_id = req.body.id;

    return db.query(`
      DELETE FROM tweets
      WHERE id = $1
      RETURNING *;
    `, [tweet_id])
    .then(response => {
      res.send("tweet deleted successfully!");
    })
    .catch(err => {
      return console.log('query error:', err);
    });

  });

  return router;
};