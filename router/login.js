var express = require('express');
var router = express();


router.get('/', function (req, res, next) {
    res.render('login', { title: "login" });
});


module.exports = router;