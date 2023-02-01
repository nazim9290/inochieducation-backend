const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const user = require("./routers/UserRouter/UserRouter");
const businessCardUser = require("./routers/BusinessCardRouter/BusinessCardRouter");


app.use(cors());
app.use(express.json());

//custom api end point
app.use("/user", user);
app.use("/businessMember", businessCardUser);


module.exports = app;