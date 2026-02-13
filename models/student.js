const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  class: { type: String, required: true },
  gender: { type: String },
  admissionNumber: { type: String, unique: true }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
