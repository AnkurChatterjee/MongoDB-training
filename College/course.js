var express = require('express');
var router = express.Router();

router.get('/hello', (request,response) => {
    return response.send("Hello from course");
})
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'college'
})

connection.connect()

module.exports = router;