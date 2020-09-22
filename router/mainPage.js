var express = require("express");
var router = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("mainPage", { title: "mainPage" });
  // res.render("mainPage", { title: "hello" });
  // console.log(req.user.userId);
});

module.exports = router;
