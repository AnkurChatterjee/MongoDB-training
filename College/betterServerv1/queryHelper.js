const connection = require('./connection');
var queryHelper = {}

queryHelper.create = (tableName,columns,data,callback) => {
    let sql = `insert into ${tableName}(`
    let columnNames = ``;
    let values = `(`;
    for(let i =0; i<columns.length; i++){
        if(i==columns.length-1){
            columnNames = columnNames+` ${columns[i]})`;
            values += '?)';
        }
        else{
            columnNames = columnNames+` ${columns[i]},`;
            values += '?,';
        }
    }
    sql += columnNames+"values"+values;
    console.log(`Insert query ${sql}`);

    connection.query(sql, data, (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": data};
        callback(result);
    })
}
queryHelper.delete = (tableName,columns,data,callback) => {
    let sql = "delete from "+tableName+" where "+columns+" = ?";
    connection.query(sql, data, (err,rows) => {
        if(err) throw err;
        let result = {"success": true, "data": data};
        callback(result);
    })
}

module.exports = queryHelper;

