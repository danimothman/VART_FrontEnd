// ExpressJS Setup
const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// Hyperledger Bridge
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const ccpPath = path.resolve(__dirname, '.', 'network', 'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

// DB
const mongoose = require("mongoose");
require("dotenv").config();
// Constants
const port = process.env.PORT || 8800;

// view engine setup
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// use static file
app.use(express.static(path.join(__dirname, "public")));

// configure app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// index 
mongoose
  .connect(
    "mongodb+srv://sang:1234@test.gtxle.mongodb.net/vart?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("db 접속 성공"))
  .catch((err) => console.log(err));




// Router
var mainPageRouter = require("./router/mainPage");
var projectRouter = require("./router/project");
var serviceRouter = require("./router/service");
var aboutRouter = require("./router/about");
var announcementRouter = require("./router/announcement");
var testRouter = require("./router/test");
var loginRouter = require("./router/login");

app.use("/", mainPageRouter);
app.use("/project", projectRouter);
app.use("/service", serviceRouter);
app.use("/about", aboutRouter);
app.use("/announcement", announcementRouter);
app.use("/test", testRouter);
app.use("/login", loginRouter);
// server start
app.listen(port, function () {
  console.log(`server on! http://localhost${port}`);
});
