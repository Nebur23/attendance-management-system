const router = express.Router();

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createNewStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);