const router = require("express").Router();
const bookRoutes = require("./books");

// Hour routes
router.use("/books", bookRoutes);

module.exports = router;
