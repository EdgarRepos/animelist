const router = require("express").Router();

const data = require("../data");

router.post("/", (req, res) => {
  if (req.session === null) {
    res.status(401).send("Unauthorized Access");
  } else {
    data.updateWatchListShow(req.body, req.session.userId)
      .then((result) => {
        res.json(result)
        data.averageScore(req.body.showId)
          .then(() => {
            console.log("Updated score:")
          })
          .catch(error => {
            console.error("Error in averageScore:", error)
          })
      })
      .catch((error) => {
        console.error("Error in updateWatchListShow:", error);
      });
    }
});

router.get("/", (req, res) => {
  if (req.session === null) {
    res.status(401).send("Unauthorized Access");
  } else {
    data.watchlistForUser(req.session.userId)
      .then((watchlist) => {
        res.json(watchlist);
      })
      .catch(error => {
        console.error("Error in watchlistForUser:", error)
      });
  }
})

module.exports = router;
