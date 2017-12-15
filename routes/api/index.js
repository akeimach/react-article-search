const router = require("express").Router();
const articleRoutes = require("./articles");

// Article routes
router.use("/", articleRoutes);

module.exports = router;
