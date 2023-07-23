require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const { auth } = require("express-openid-connect");
const { db } = require("./routes/db");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
};
app.use(auth(config));

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

var admin = require("./routes/admin/admin.js");
app.use("/admin", admin);

var pages = require("./routes/pages/pages.js");
app.use("/", pages);

var guess = require("./routes/pages/guess.js");
app.use("/guess", guess);

var admin = require("./routes/admin/admin.js");
app.use("/admin", admin);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
