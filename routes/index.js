const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.json("Welcome to Twitter-Clone")
  });
  return router;
};
