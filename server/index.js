const cookieSession = require("cookie-session");
const express = require("express");

const data = require("./data");
const routes = require("./routes");

const USERS_PATH = "/api/users";
const SHOWS_PATH = "/api/shows";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cookieSession({
  httpOnly: false,
  maxAge: 1000 * 3600 * 24,
  secret: "super123secret",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);

app.post(USERS_PATH, (req, res) => {
  usersCollection.findOne({user: req.body.user})
    .then(result => {
      if (result === null) {
        usersCollection.insertOne(req.body)
          .then(result => {
            console.log(result);
            res.json(true)
          })
          .catch(error => console.error("Error in  createAccount: ", error))
        
        console.log("Account successfully created");
        res.json(true)
      } else {
        console.error("Error: User already created")
        res.json(false)
      }
    });
});

app.post(SHOWS_PATH, (req, res) => {
  showsCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error("Error in app.post - showsCollection:", error))

})

app.put(USERS_PATH, (req, res) => {
  console.log(req.body);
  user
  usersCollection.findOneAndUpdate(
    { message: "Hello from client" },
    {
      $set: {
        message: req.body.message
      }
    },
    {
      upsert: true
    }
  )
  .then(() => {
    res.json('Success');
  })
  .catch(error => console.error("Error in app.put:", error))
})

app.put(SHOWS_PATH, (req, res) => {
  console.log(req.body);
  showsCollection.findOneAndUpdate(
    { message: "Hello from client" },
    {
      $set: {
        message: req.body.message
      }
    },
    {
      upsert: true
    }
  )
  .then(() => {
    res.json('Success');
  })
  .catch(error => console.error("Error in app.put:", error))
})

app.delete(USERS_PATH, (req, res) => {
  usersCollection.deleteOne(
    { id: req.body.id}
  )
  .then(() => {
    res.json(`Deleted "Hello from client"`)
  })
  .catch(error => console.error("Error in app.put:", error))
})

app.delete(SHOWS_PATH, (req, res) => {
  showsCollection.deleteOne(
    { id: req.body.id}
  )
  .then(() => {
    res.json(`Deleted "Hello from client"`)
  })
  .catch(error => console.error("Error in app.put:", error))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

data.connect().then(() => {
  console.log("Succesfully connected to the database");
});
