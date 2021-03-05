const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
      res.status(400).send("Error: Please fill in both fields!");
    } else if (db.query(`SELECT * FROM users WHERE username = ${username};`)) {
      res.status(400).send("Error: This username already exists!");
    } else {
      return db.query(`
      INSERT INTO users (username, password)
      VALUES($1, $2)
      RETURNING *;
    `, [username, password])
        .then(response => {
          res.send(response)
        })
        .catch(e => {
          response.send(e);
        });
    }
  });

  return router;
};