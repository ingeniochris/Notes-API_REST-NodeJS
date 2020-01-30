const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// settings
app.set("port", process.env.PORT || 3000);

//middleware
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/api.routes"));

//error 404
app.use((req, res, next) => {
  res.status(400).json("No podemos responder a tu solicitud");
  next();
});

//error 500
app.use((req, res, err, next) => {
  console.error("El servidor tiene un problema");
  console.log(err);
  res.status(500).json("Problemas con el servidor");
  next();
});

module.exports = app;
