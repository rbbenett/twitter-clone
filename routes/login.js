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
    return db.query(`
      SELECT * FROM users
      WHERE username = $1 AND password = $2;
    `, [username, password])
      .then(response => {
        if (response.rows[0]) {
          let userName = response.rows[0].username;
          req.session["userName"] = userName;
          res.send("Login Successfull!");
        } else {
          res.send("Username or Password is Incorrect!");
        }
      })
      .catch(e => {
        res.send(e);
      });
  });

  return router;
};