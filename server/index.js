const cookieSession = require("cookie-session");
const express = require("express");

const data = require("./data");
const routes = require("./routes");

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

data.connect().then(() => {
  console.log("Succesfully connected to the database");
});
