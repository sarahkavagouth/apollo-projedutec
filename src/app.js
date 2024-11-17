const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/adminRoutes");
const playerRoutes = require("./routes/playerRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api", adminRoutes);
app.use("/api", playerRoutes);
app.use("/api", quizRoutes);

module.exports = app;
