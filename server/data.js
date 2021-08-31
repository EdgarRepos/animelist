const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const DB_URL = "mongodb+srv://animeman:1234@cluster0.jizts.mongodb.net/Cluster0?retryWrites=true&w=majority";
const HEADERS_COLLECTION = "headers";
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

// exports.getWatchListShow = function(userId) {
//   return getCollection(WATCH_LIST_COLLECTION)
//     .then(collection => collection.findOne({userId: new ObjectId(userId)}));
// };

exports.getUser = function(username) {
  return getCollection(USERS_COLLECTION)
    .then(collection => collection.findOne({username: username}));
};

exports.insertHeader = function(header) {
  return getCollection(HEADERS_COLLECTION)
    .then(collection => collection.insertOne(header));
};

exports.insertShow = function(show) {
  return getCollection(SHOWS_COLLECTION)
    .then(collection => collection.insertOne(show));
};

exports.insertUser = function(user) {
  return getCollection(USERS_COLLECTION)
    .then(collection => collection.insertOne(user));
};

exports.insertWatchListShow = function(show, userId) {
  return getCollection(WATCH_LIST_COLLECTION)
    .then(collection => {
      return collection.insertOne({
        ...show,
        userId: new ObjectId(userId),
        showId: new ObjectId(show.showId),
      });
    });
};

exports.listHeaders = function() {
  return getCollection(HEADERS_COLLECTION).then(collection => collection.find().toArray());
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

exports.updateShow = function(show) {
  return getCollection(SHOWS_COLLECTION)
    .then(collection => collection.findOneAndUpdate(
      {
        _Id: show._Id
      },
      {
        $set: {
          name: show.name,
          startedAiring: show.startedAiring,
          description: show.description,
          genres: show.genres,
          episodes: show.episodes,
          img: show.img,
          score: show.score
        }
      },
      {
        upsert: true
      }
    ));
};

exports.updateWatchListShow = function(show, userId) {
  return getCollection(WATCH_LIST_COLLECTION)
    .then(collection => collection.findOneAndUpdate(
      {
        userId: ObjectId(userId),
        showId: ObjectId(show.showId),
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

exports.watchlistForUser = function(userId) {
  return getCollection(WATCH_LIST_COLLECTION).then((collection) => {
    return collection.find({userId: new ObjectId(userId)}).toArray().then((watchlist) => {
      const showsIds = watchlist.map(w => new ObjectId(w.showId));
      const watchlistMap = watchlist.reduce((acc, w) => {
        acc[w.showId] = w;
        return acc;
      }, {});
      return getCollection(SHOWS_COLLECTION).then((collection) => {
        return collection.find({_id: {$in: showsIds}}).toArray().then((shows) => {
          return shows.map((show) => {
            const meta = watchlistMap[show._id];
            return {
              ...show,
              watched: meta.episodes,
              score: meta.score,
              status: meta.status,
            };
          });
        });
      });
    });
  });
};

exports.deleteShow = function(showId) {
  return getCollection(SHOWS_PATH)
    .then(collection => collection.deleteOne({ _id: showId}))
};
