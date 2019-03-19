const Joi = require("joi");
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  text: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// we can add functionality to our documents
// - functions added to the methods property of a schema get compiled into
//   the Model prototype and exposed on each document instance
// - methods must be added to the schema BEFORE compiling it into
//   mongoose.model()
noteSchema.methods.log = function() {
  console.log(
    `Title: ${this.title}, Text: ${this.text}, Creted: ${this.created}`
  );
};

const Note = mongoose.model("Note", noteSchema);

// Is this proper place for Joi validation?
function validateNote(note) {
  const schema = {
    title: Joi.string(),
    text: Joi.string().required()
  };
  return Joi.validate(note, schema);
}

module.exports.Note = Note;
module.exports.validate = validateNote;
