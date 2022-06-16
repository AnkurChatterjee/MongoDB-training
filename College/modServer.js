const { response } = require('express');
var express = require('express')  
var app = express();
var cors = require('cors');
var course = require('./course');
var student = require('./student');

app.use(cors())

let port = 9091;
app.use('/student', student);
app.use('/course', course);

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'college'
})

connection.connect()

app.listen(port,()=>console.log(`Server running in port ${port}`));