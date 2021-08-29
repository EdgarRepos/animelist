const router = require("express").Router();

const showsRoutes = require("./shows");
const usersRoutes = require("./users");
const watchlistRoutes = require("./watchlist");

router.use("/shows", showsRoutes);
router.use("/users", usersRoutes);
router.use("/watchlist", watchlistRoutes);

module.exports = router;
