const router = require("express").Router();
const hoursController = require("../../controllers/hoursController");

// Matches with "/api/hours"
router.route("/")
  .get(hoursController.findAll)
  .post(hoursController.create);

// Matches with "/api/hours/:id"
router
  .route("/:id")
  .get(hoursController.findById)
  .put(hoursController.update)
  .delete(hoursController.remove);

module.exports = router;
