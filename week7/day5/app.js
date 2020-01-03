const express = require("express");
const config = require("config");
const app = express();

const port = process.env.PORT || config.get("PORT");

app.use(express.static("views"));