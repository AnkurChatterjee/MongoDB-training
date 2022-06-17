const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
//var course = require('./course');
var student = require('./student');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

let port = 9091;
app.use('/student', student);
//app.use('/course', course);

app.listen(port,()=>console.log(`Server running in port ${port}`));