var express = require('express');
var router = express();


router.get('/', function (req, res, next) {
    res.render('service', { title: "service" });
});


module.exports = router;