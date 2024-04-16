const mongoose = require("mongoose");

const sttendanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
  },
  sexe: {
    type: String,
    required: true,
  },
  attendance: {
    type: String,
    enum: ["present", "absent"],
    default: "absent",
    require: true,
  },
});

const Attendance = mongoose.model("Attendance", sttendanceSchema);

module.exports = Attendance;
