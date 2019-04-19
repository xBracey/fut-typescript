const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const playerArray = require("./data/fut.json");

//Note to run this use forever NPM library

// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "v94d$rJnE3mizTg",
  database: "fut_db"
});

// Initialize the app
const app = express();

app.use(cors());

// https://expressjs.com/en/guide/routing.html
app.get("/players", function(req, res) {
  const search = req.query.search ? req.query.search : "";
  connection.query(
    `SELECT * FROM players WHERE Name LIKE '%${search}%' LIMIT 0,11`,
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

// https://expressjs.com/en/guide/routing.html
app.get("/player", function(req, res) {
  const id = req.query.id ? req.query.id : "";
  connection.query(`SELECT * FROM players WHERE ID="${id}"`, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results[0]);
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Go to http://localhost/");
});
