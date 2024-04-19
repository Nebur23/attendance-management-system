const Student = require("../model/Student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
const getAllStudentsBySpeciality = async (req, res) => {
  const id = req.params.id;
  try {
    const students = await Student.find({ speciality: id }).sort({ name: 1 });
    res.json({ students });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

const getStudent = (req, res) => {};

const createNewStudent = async (req, res) => {
  const { name, matricule, sexe, speciality } = req.body;

  if (!name || !matricule || !sexe || !speciality)
    return res.status(400).json({
      success: false,
      message: "Name, Matricule, Speciality, and Sexe are required",
    });

  try {
    const existingStudent = await Student.findOne({ name }).exec();

    if (existingStudent)
      return res.status(409).json({
        success: false,
        message: "Student with this name already exists",
      });

    const newStudent = await Student.create({
      name,
      matricule,
      sexe,
      speciality,
    });

    res
      .status(201)
      .json({ success: true, message: `New Student ${name} created` });
  } catch (error) {
    let errorMessage = "Something went wrong";

    if (error.code === 11000) {
      errorMessage = "Student with this name already exists";
    } else if (error.name === "ValidationError") {
      errorMessage = error.message;
    }

    res.status(500).json({ success: false, message: errorMessage, error });
  }
};

const updateStudent = (req, res) => {};

const deleteStudent = (req, res) => {};

module.exports = {
  getAllStudents,
  createNewStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getAllStudentsBySpeciality,
};
