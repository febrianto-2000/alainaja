require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const router = require("./app/deliverey/http/routers");

if (process.env.NODE_ENV == "development") {
  console.log("morgan on!!")
  app.use(morgan("dev"));
}


app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public/")));

// router
app.use("/apis", router);
module.exports = app; //for e2e
