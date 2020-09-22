var express = require("express");
var router = express();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("test", { title: "test" });
  // res.render("mainPage", { title: "hello" });
  // console.log(req.user.userId);
});

module.exports = router;