import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
  speciality: {
    type: String,
    enum: ["cse", "eme", "cee", "che"],
    default: "cse",
    require: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student
