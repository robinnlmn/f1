const { Router } = require("express");
const app = Router();
const { db } = require("../db");

app.post("/creategame", (req, res) => {
  console.log(req.body);

  var timestamp = new Date(req.body.ends).getTime();
  console.log(timestamp);

  db.run(
    `INSERT INTO games (name, date, ends, country) VALUES(?,date(), ${timestamp}, ?)`,
    [req.body.name, req.body.country],
    (err, result) => {
      if (err) return res.send(err) && console.error(err);

      res.send("SUCCESS");
    }
  );
});

module.exports = app;
