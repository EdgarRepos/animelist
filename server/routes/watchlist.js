const router = require("express").Router();

const data = require("../data");

router.post("/", (req, res) => {
  data.getWatchListShow(req.session.userId)
    .then(result => {
      if (result) {
        data.updateWatchListShow(req.session.userId, req.body)
          .then(() => {
            res.json({ok: true})
          })
          .catch((error) => {
            console.error("Error in updateWatchListShow:", error)
          })
        console.log("Updated show");
      } else {
        data.insertWatchListShow(req.body)
          .then(newShow => console.log(newShow))
          .catch(error => {
            console.error("Error in inserShowToWatchList:", error);
          })
        console.log("Added show to watch list!");
      }
    })
    .catch(error => {
      console.log("Error in router.post getWatchListShow:", error)
    })
})

module.exports = router;
