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

module.exports = app;
