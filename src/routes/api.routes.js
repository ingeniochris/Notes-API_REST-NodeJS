const { Router } = require("express");
const route = Router();
const { getNotes, postNote } = require("../controller/api");
const { check } = require("express-validator");
const valid = [
  check("title").isLength({ min: 4 }),
  check("description").isLength({ min: 5 })
];

route
  .route("/api/notes")
  .get(getNotes)
  .post(valid, postNote),
  (module.exports = route);
