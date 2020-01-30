const mongoose = require("mongoose");

const Uri = process.env.URI ? process.env.URI : "mongodb://localhost/testing";

mongoose.connect(Uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => console.log("DB is connected"));

module.exports = db;
