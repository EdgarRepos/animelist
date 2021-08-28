const router = require("express").Router();

const data = require("../data");

router.get("/", (_, res) => {
  data.listShows()
    .then(users => res.json(users))
    .catch(error => {
      console.error("Error in app.get - showsCollection: ", error);
      res.status(500).send("Error retrieving data");
    });
});


module.exports = router;
