const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post("/", (req, res) => {

    req.session.user_id = null;
    res.redirect("/urls");

  });

  return router;
};