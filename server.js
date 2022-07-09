const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 7000;

// Log the request
app.use(morgan("tiny"));

// Parse request body
app.use(bodyparser.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");

// Load asset
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/update-user", (req, res) => {
  res.render("update_user");
});

app.get("/add-user", (req, res) => {
  res.render("add_user");
});

app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT})`)
);
