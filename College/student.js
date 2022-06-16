var express = require('express');
var router = express.Router();

router.get('/hello', (request,response) => {
    return response.send("Hello from student");
})

module.exports = router;