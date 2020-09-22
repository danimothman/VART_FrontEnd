var express = require('express');
var router = express();


router.get('/', function (req, res, next) {
    res.render('announcement', { title: "announcement" });
});


module.exports = router;