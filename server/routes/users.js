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

router.get("/logout", (req, res) => {
  req.session = null;
  res.json({authorized: false});
});

router.post("/login", (req, res) => {
  data.getUser(req.body.username)
    .then(user => {
      if (user && user.password === req.body.password) {
        req.session.userId = user._id;
        req.session.userName = user.username;
        res.json({
          authorized: true,
          userId: user._id,
          userName: user.username,
        });
      } else {
        res.json({authorized: false});
      }
    })
    .catch(error => {
      console.error("Error in post /login - getUser: ", error);
      res.status(500).send("Error retrieving data");
    });
});

router.post("/register", (req, res) => {
  data.getUser(req.body.username)
    .then(user => {
      if (user === null) {
        data.insertUser(req.body)
          .then(newUser => {
            console.log("New user:", newUser);
            data.getUser(req.body.username)
              .then(user => {
                req.session.userId = user._id;
                req.session.userName = user.username;
                res.json({
                  authorized: true,
                  userId: user._id,
                  userName: user.username,
                });
              })
          })
          .catch(error => console.error("Error in post /register: ", error))
        
        console.log("Account successfully created");
      } else {
        console.error("Error: User already created")
        res.json({authorized: false})
      }
    });
});


module.exports = router;
