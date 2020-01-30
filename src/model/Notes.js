const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      require: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Note", NoteSchema);
