const router = require("express").Router();

const data = require("../data");

router.get("/", (_, res) => {
  data.listShows()
    .then(shows => res.json(shows))
    .catch(error => {
      console.error("Error in router.get - listShows: ", error);
      res.status(500).send("Error retrieving data");
    });
});

router.post("/", (req, res) => {
  data.insertShow(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(error => console.error("Error in router.post - insertShow:", error))
});

router.put("/", (req, res) => {
  data.updateShow(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(error => console.error("Error in router.put - updateShow:", error))
});

router.delete("/", (req, res) => {
  data.deleteShow(req.body._id)
    .then(() => {
      res.send("Deleted show with id:", req.body._id);
    })
    .catch(error => console.error("Error in router.delete - deleteShow:", error))
});

module.exports = router;
