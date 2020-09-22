var express = require('express');
var router = express();


router.get('/', function (req, res, next) {
    res.render('about', { title: "about" });
});


module.exports = router;