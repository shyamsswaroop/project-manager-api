var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    //res.render('index');
    res.send('Hello World Shyam')
});

module.exports = router;
