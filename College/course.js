var express = require('express');
var router = express.Router();

router.get('/hello', (request,response) => {
    return response.send("Hello from course");
})

module.exports = router;