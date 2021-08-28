const MongoClient = require("mongodb").MongoClient;

const DB_URL = "mongodb+srv://animeman:1234@cluster0.jizts.mongodb.net/Cluster0?retryWrites=true&w=majority";
const SHOWS_COLLECTION = "shows";
const USERS_COLLECTION = "users";

let db = null;

exports.connect = function() {
  return MongoClient.connect(DB_URL)
    .then(client => {
      db = client.db("anime-list");
    })
    .catch(error => console.error("Error on MongoClient.connect: ", error));
};

function getCollection(name) {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db.collection(name));
    } else {
      reject("The DB connection hasn't been stablished");
    }
  });
}

exports.getUser = function(username) {
  return getCollection(USERS_COLLECTION)
    .then(collection => collection.findOne({user: username}));
};

exports.listShows = function() {
  return getCollection(SHOWS_COLLECTION).then(collection => collection.find().toArray());
};

exports.listUsers = function() {
  return getCollection(USERS_COLLECTION).then(collection => collection.find().toArray());
};
