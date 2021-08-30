const router = require("express").Router();

const data = require("../data");

router.get("/", (req, res) => {
  if (req.session === null) {
    console.error("Error 401 Unauthorized");
    res.status(401).send("Unauthorized");
  } else {
    data.getUser(req.session.userName)
      .then(user => {
        res.json({
          userId: user._id,
          userName: user.username,
          email: user.email
        })
      })
      .catch(error => {
        console.log("Error in router.get getUser:", error);
      }) 
  }
});


module.exports = router;
