const { response } = require('express');
var express = require('express')  
var app = express();
var cors = require('cors');

app.use(cors())

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
        let result = {}
        result ['columns'] = fields;
        result['data'] = rows;
        response.json(result);
      })
      
})
app.get('/dept',(request,response) => {
  connection.query('SELECT * from dept', (err, rows, fields) => {
      if (err) throw err
      let result = {}
      result ['columns'] = fields;
      result['data'] = rows;
      response.json(result);
    })
    
})

app.listen(port,()=>console.log(`Server running in port ${port}`));