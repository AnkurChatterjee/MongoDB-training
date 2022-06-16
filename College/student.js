const { response } = require('express');
var express = require('express');
var router = express.Router();

router.get('/hello', (request,response) => {
    return response.send("Hello from student");
})
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'college'
})

connection.connect()

router.post('/', (request,response) => {
    let sql = "insert into student(roll_no,name,age,dept_id,active) values(?,?,?,?,?)"
    connection.query(sql, [request.body.roll_no,request.body.name,request.body.age,request.body.dept_id,request.body.active], (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": rows};
        return response.json(result);
    })
})
router.put('/', (request,response) => {
    let sql = "update student set roll_no = ?, name = ?, age = ?, dept_id = ?, active = ? where roll_no = ?"
    connection.query(sql, [request.body.roll_no,request.body.name,request.body.age,request.body.dept_id,request.body.active, request.body.roll_no], (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": rows};
        return response.json(result);
    })
})
router.get('/getbyid',(request,response) => {
    connection.query('SELECT * from student where roll_no=?', [request.query.roll_no], (err, rows, fields) => {
        if (err) throw err
        let result = {}
        result ['columns'] = fields;
        result['data'] = rows;
        response.json(result);
      })
  })
  router.get('/',(request,response) => {
    connection.query('SELECT * from student', (err, rows, fields) => {
        if (err) throw err
        let result = {}
        result ['columns'] = fields;
        result['data'] = rows;
        response.json(result);
      })
  })
  router.delete('/', (request,response) => {
    let sql = "delete from student where roll_no = ?"
    connection.query(sql, [request.body.roll_no], (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": rows};
        return response.json(result);
    })
})

module.exports = router;