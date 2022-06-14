const { response } = require('express');
var express = require('express')  
var app = express();

let port = 9091;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'college'
})

connection.connect()

app.get('/student',(request,response) => {
    connection.query('SELECT * from student', (err, rows, fields) => {
        if (err) throw err
        response.json(rows);
      })
      
})

app.listen(port,()=>console.log(`Server running in port ${port}`));