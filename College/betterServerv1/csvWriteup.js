const createCsvWriter = require('csv-writer').createObjectCsvWriter;
let queryHelper = require('./queryHelper');
const csvWriter = createCsvWriter({
    path: 'C:/Users/Ankur Chatterjee/OneDrive/Desktop/Training/College/betterServerv1/student.csv',
    header: [
        {id: 'roll_no', title: 'roll_no'},
        {id: 'name', title: 'name'},
        {id: 'age', title: 'age'},
        {id: 'dept_id', title: 'dept_id'},
        {id: 'active', title: 'active'}
    ]
});
 
let data = [20,"Pronoy", 25, 1, "yes"];
    let columns = ["roll_no","name","age","dept_id","active"];
    let tableName = "student";
    return queryHelper.create(tableName, columns, data, (result) => csvWriter.writeRecords(result.data)       // returns a promise
    .then(() => {
        console.log('...Done');
    }))