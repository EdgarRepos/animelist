const router = require("express").Router();

const data = require("../data");

router.get("/", (_, res) => {
  data.listUsers()
    .then(users => res.json(users))
    .catch(error => {
      console.error("Error in app.get - usersCollection: ", error);
      res.status(500).send("Error retrieving data");
    });
});

router.post("/login", (req, res) => {
  data.getUser(req.body.username)
    .then(user => {
      if (user && user.password === req.body.password) {
        req.session.userId = user._id;
        req.session.userName = user.name;
        res.json({
          authorized: true,
          userId: user._id,
          userName: user.user,
        });
      } else {
        res.json({authorized: false});
      }
    })
    .catch(error => {
      console.error("Error in app.get - getUser: ", error);
      res.status(500).send("Error retrieving data");
    });
});

module.exports = router;
