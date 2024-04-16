const express = require("express");
const router = express.Router();
const studentController = require("../../controllers/studentController")

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createNewStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

router.route("/:id")
.get((req,res) => {
    res.json({ "id": req.params.id})
})

module.exports = router;
