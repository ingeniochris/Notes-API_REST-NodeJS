const Note = require("../model/Notes");
const { validationResult } = require("express-validator");

module.exports = apiCtrl = {
  getNotes: async (req, res) => {
    const listNote = await Note.find();
    res.json(listNote);
  },
  postNote: async (req, res) => {
    const { title, description } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const newNote = new Note({
      title,
      description
    });
    let resdb = await newNote.save();
    if (!resdb) {
      console.log(resdb);
    }
    res.json("Note is saved ");
  }
};
