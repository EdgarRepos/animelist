const router = require("express").Router();

const data = require("../data");

router.post("/", (req, res) => {
  if (req.session === null) {
    res.status(401).send("Unauthorized Access");
  } else {
    data.getWatchListShow(req.session.userId)
      .then(result => {
        if (result) {
          data.updateWatchListShow(req.body, req.session.userId)
            .then(() => {
              res.json({ok: true})
            })
            .catch((error) => {
              console.error("Error in updateWatchListShow:", error)
            })
          console.log("Updated show");
        } else {
          data.insertWatchListShow(req.body, req.session.userId)
            .then(newShow => console.log(newShow))
            .catch(error => {
              console.error("Error in inserShowToWatchList:", error);
            })
          console.log("Added show to watch list!");
        }
      })
      .catch(error => {
        console.log("Error in router.post getWatchListShow:", error)
      })}
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
