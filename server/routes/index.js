const router = require("express").Router();

const headersRoutes = require("./headers");
const myAccountRoutes = require("./myAccount");
const showsRoutes = require("./shows");
const usersRoutes = require("./users");
const watchlistRoutes = require("./watchlist");

router.use("/headers", headersRoutes);
router.use("/myAccount", myAccountRoutes);
router.use("/shows", showsRoutes);
router.use("/users", usersRoutes);
router.use("/watchlist", watchlistRoutes);

module.exports = router;
