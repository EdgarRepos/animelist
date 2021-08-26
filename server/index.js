const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const USERS_PATH = "/api/users";
const SHOWS_PATH = "/api/shows";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

MongoClient.connect("mongodb+srv://animeman:1234@cluster0.jizts.mongodb.net/Cluster0?retryWrites=true&w=majority")
  .then(client => {
    // console.log("Connected to Database");

    const db = client.db('anime-list');
    const usersCollection = db.collection('users');
    const showsCollection = db.collection('shows');

    app.get(USERS_PATH, (req, res) => {
      res.json({ message: "Hello from user path!" });
      db.collection('users').find().toArray()
        .then(result => {
          console.log(result);
        })
        .catch(error => console.error("Error in app.get - usersCollection::", error));
    });

    app.get(SHOWS_PATH, (req, res) => {
      console.log("Hello from shows path!");
      db.collection('shows').find().toArray()
        .then(result => {
          res.json(result);
        })
        .catch(error => console.error("Error in app.get - showsCollection::", error));
    });
    
    app.post(USERS_PATH, (req, res) => {
      // console.log(req.body)
      usersCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error("Error in app.post - usersCollection:", error))

    })

    app.post(SHOWS_PATH, (req, res) => {
      // console.log(req.body)
      showsCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error("Error in app.post - showsCollection:", error))

    })

    app.put(USERS_PATH, (req, res) => {
      console.log(req.body);
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
      .then(result => {
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
      .then(result => {
        res.json('Success');
      })
      .catch(error => console.error("Error in app.put:", error))
    })

    app.delete(USERS_PATH, (req, res) => {
      usersCollection.deleteOne(
        { id: req.body.id}
      )
      .then(result => {
        res.json(`Deleted "Hello from client"`)
      })
      .catch(error => console.error("Error in app.put:", error))
    })

    app.delete(SHOWS_PATH, (req, res) => {
      showsCollection.deleteOne(
        { id: req.body.id}
      )
      .then(result => {
        res.json(`Deleted "Hello from client"`)
      })
      .catch(error => console.error("Error in app.put:", error))
    })

  })
  .catch(error => console.error("Error on MongoClient.connect:", error));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
