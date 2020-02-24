const functions = require("firebase-functions");

const app = require("express")();

const cors = require("cors");
app.use(cors());

const { signup, login, addUserDetails } = require("./handlers/users");

const FBAuth = require("./util/fbAuth");

// User Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user", FBAuth, addUserDetails);

exports.api = functions.https.onRequest(app);

