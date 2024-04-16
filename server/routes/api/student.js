const express = require("express");
const router = express.Router();
const studentController = require("../../controllers/studentController")
const verifyJWT = require("../../middlewares/verifyJwt")

router
  .route("/")
  .get(verifyJWT, studentController.getAllStudents)
  .post(verifyJWT, studentController.createNewStudent)
  .put(verifyJWT, studentController.updateStudent)
  .delete(verifyJWT,studentController.deleteStudent);

router.route("/:id")
.get((req,res) => {
    res.json({ "id": req.params.id})
})

module.exports = router;
