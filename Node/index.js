const express = require('express')
const app = express();
const port = 3000;
require('dotenv').config();
const mysql = require("mysql2/promise");


app.get('/', async (req, res) => {
  const config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
  };

  const conn = await mysql.createConnection(config);
  const name = req.query.name;

  if(name){
    console.log("name: " + name);
    await conn.query(`INSERT INTO people(name) values (?)`, [name]);
  }

  const [rows] = await conn.query(`SELECT * FROM people`);
  console.log(rows);
  const names = rows.map((row) => `${row.id} - ${row.name}`);

  res.send(`<h1>Full Cycle Rocks!</h1><br> ${names.join(",<br> ")}`);
});

app.listen(port, () => {
  console.log('Running at the port ' + port);
});
