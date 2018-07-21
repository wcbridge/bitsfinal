const router = require("express").Router();
const hourRoutes = require("./hours");

// Hour routes
router.use("/hours", hourRoutes);

module.exports = router;
