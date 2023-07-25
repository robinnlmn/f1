const { Router } = require("express");
const app = Router();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const fs = require("fs");
const { db } = require("../db");

app.use(expressLayouts);

const drivers = [
  {
    name: "VER",
    team: "RB",
    nationality: "nl",
  },
  {
    name: "PER",
    team: "RB",
    nationality: "mx",
  },
  {
    name: "HAM",
    team: "ME",
    nationality: "gb",
  },
  {
    name: "RUS",
    team: "ME",
    nationality: "gb",
  },
  {
    name: "SAI",
    team: "FE",
    nationality: "es",
  },
  {
    name: "LEC",
    team: "FE",
    nationality: "mc",
  },
  {
    name: "ALO",
    team: "AM",
    nationality: "es",
  },
  {
    name: "STR",
    team: "AM",
    nationality: "ca",
  },
  {
    name: "NOR",
    team: "ML",
    nationality: "gb",
  },
  {
    name: "PIA",
    team: "ML",
    nationality: "au",
  },
  {
    name: "OCO",
    team: "AL",
    nationality: "fr",
  },
  {
    name: "GAS",
    team: "AL",
    nationality: "fr",
  },
  {
    name: "ALB",
    team: "WI",
    nationality: "th",
  },
  {
    name: "SAR",
    team: "WI",
    nationality: "us",
  },
  {
    name: "TSU",
    team: "AT",
    nationality: "jp",
  },
  {
    name: "RIC",
    team: "AT",
    nationality: "au",
  },
  {
    name: "MAG",
    team: "HA",
    nationality: "dk",
  },
  {
    name: "HUL",
    team: "HA",
    nationality: "de",
  },
  {
    name: "ZHO",
    team: "AR",
    nationality: "cn",
  },
  {
    name: "BOT",
    team: "AR",
    nationality: "fi",
  },
];

app.get("/:id", (req, res) => {
  db.get(`SELECT * FROM games WHERE id = ${req.params.id}`, [], (err, game) => {
    db.get(
      `SELECT * FROM users WHERE name = "${req.oidc.user.name}"`,
      (err, row) => {
        res.render("guess", {
          title: "Guess",
          user: JSON.stringify(row),
          game: JSON.stringify(game),
          drivers: JSON.stringify(drivers),
        });
      }
    );
  });
});

app.post("/:id", (req, res) => {
  console.log(JSON.parse(req.body.guess));
  db.get(
    `SELECT id FROM users WHERE name = "${req.oidc.user.name}"`,
    [],
    (err, id) => {
      if (err) return console.error(err) && res.send(err);
      db.run(
        "INSERT INTO guess (game, user, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', fastest_lap)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          req.params.id,
          id.id,
          JSON.parse(req.body.guess)[0],
          JSON.parse(req.body.guess)[1],
          JSON.parse(req.body.guess)[2],
          JSON.parse(req.body.guess)[3],
          JSON.parse(req.body.guess)[4],
          JSON.parse(req.body.guess)[5],
          JSON.parse(req.body.guess)[6],
          JSON.parse(req.body.guess)[7],
          JSON.parse(req.body.guess)[8],
          JSON.parse(req.body.guess)[9],
          JSON.parse(req.body.guess)[10],
          JSON.parse(req.body.guess)[11],
          JSON.parse(req.body.guess)[12],
          JSON.parse(req.body.guess)[13],
          JSON.parse(req.body.guess)[14],
          JSON.parse(req.body.guess)[15],
          JSON.parse(req.body.guess)[16],
          JSON.parse(req.body.guess)[17],
          JSON.parse(req.body.guess)[18],
          JSON.parse(req.body.guess)[19],
          req.body.fastestlap,
        ],
        (err, row) => {
          if (err) return console.error(err) && res.send(err);
        }
      );
    }
  );
});

module.exports = app;
