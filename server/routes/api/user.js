const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createNewUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
