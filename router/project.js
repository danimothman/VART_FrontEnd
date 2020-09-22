var express = require('express');
var router = express();


router.get('/', function (req, res, next) {
    res.render('project', { title: "project" });
});


module.exports = router;