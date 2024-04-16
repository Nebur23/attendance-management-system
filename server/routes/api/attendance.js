const express = require("express");
const router = express.Router();
const attendanceController = require("../../controllers/attendanceController");

router
  .route("/")
  .get(attendanceController.getAllAttendances)
  .post(attendanceController.createNewAttendance)
  .put(attendanceController.updateAttendance)
  .delete(attendanceController.deleteAttendance);

router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
