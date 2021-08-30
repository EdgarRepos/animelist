const router = require("express").Router();

const data = require("../data");

router.get("/", (_, res) => {
  data.listHeaders()
    .then(headers => {
      res.json(headers)
    })
    .catch(error => {
      console.error("Error in router.get - data.listHeaders: ", error);
      res.status(500).send("Error retrieving data");
    });
});

router.post("/", (req, res) => {
  data.insertHeader(req.body)
    .then((result) => {
      res.json(result)
    })
    .catch(error => console.error("Error in router.post - insertHeader:", error))
});


module.exports = router;
