const router = require("express").Router();

const showsRoutes = require("./shows");
const usersRoutes = require("./users");

router.use("/shows", showsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
