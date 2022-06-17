let queryHelper = require('./queryHelper');
let router = require('express').Router();

let columns = ["roll_no","name","age","dept_id","active"];
let tableName = "student";
router.post('/', (request,response) => {
    let data = [request.body.roll_no,request.body.name,request.body.age,request.body.dept_id,request.body.active];
    return queryHelper.create(tableName, columns, data, (result) => response.json(result))
})
router.delete('/', (request,response) => {
    return queryHelper.delete(tableName, columns[0], [request.body.roll_no], (result) => response.json(result))
})

module.exports = router;