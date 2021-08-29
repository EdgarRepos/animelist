const MongoClient = require("mongodb").MongoClient;

const DB_URL = "mongodb+srv://animeman:1234@cluster0.jizts.mongodb.net/Cluster0?retryWrites=true&w=majority";
const SHOWS_COLLECTION = "shows";
const USERS_COLLECTION = "users";
const WATCH_LIST_COLLECTION = "watchlist";

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

exports.getWatchListShow = function(userId) {
  return getCollection(WATCH_LIST_COLLECTION)
    .then(collection => collection.findOne({id: userId}));
};

exports.getUser = function(username) {
  return getCollection(USERS_COLLECTION)
    .then(collection => collection.findOne({username: username}));
};

exports.insertUser = function(user) {
  return getCollection(USERS_COLLECTION)
    .then(collection => collection.insertOne(user));
};

exports.insertWatchListShow = function(show) {
  return getCollection(WATCH_LIST_COLLECTION)
    .then(collection => collection.insertOne(show));
};

exports.listShows = function() {
  return getCollection(SHOWS_COLLECTION).then(collection => collection.find().toArray());
};

exports.listUsers = function() {
  return getCollection(USERS_COLLECTION).then(collection => collection.find().toArray());
};

exports.listWatchList = function() {
  return getCollection(WATCH_LIST_COLLECTION).then(collection => collection.find().toArray());
};

exports.updateWatchListShow = function(userId, show) {
  return getCollection(WATCH_LIST_COLLECTION)
    .then(collection => collection.findOneAndUpdate(
      {
        id: userId,
        name: show.name
      },
      {
        $set: {
          episodes: show.episodes,
          status: show.status,
          score: show.score
        }
      },
      {
        upsert: true
      }
    ));
};
