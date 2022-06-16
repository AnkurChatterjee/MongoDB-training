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

router.post('/', (request,response) => {
    let sql = "insert into course(course_id,course_name,semister) values(?,?,?)"
    connection.query(sql, [request.body.course_id,request.body.course_name,request.body.semister], (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": rows};
        return response.json(result);
    })
})
router.put('/', (request,response) => {
    let sql = "update course set course_name = ?, semister = ? where course_id = ?"
    connection.query(sql, [request.body.course_name,request.body.semister,request.body.dept_id], (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": rows};
        return response.json(result);
    })
})
router.get('/getbyid',(request,response) => {
    connection.query('SELECT * from course where course_id=?', [request.query.course_id], (err, rows, fields) => {
        if (err) throw err
        let result = {}
        result ['columns'] = fields;
        result['data'] = rows;
        response.json(result);
      })
  })
  router.get('/',(request,response) => {
    connection.query('SELECT * from course', (err, rows, fields) => {
        if (err) throw err
        let result = {}
        result ['columns'] = fields;
        result['data'] = rows;
        response.json(result);
      })
  })
  router.delete('/', (request,response) => {
    let sql = "delete from course where course_id = ?"
    connection.query(sql, [request.body.course_id], (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": rows};
        return response.json(result);
    })
})

module.exports = router;