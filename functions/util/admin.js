const admin = require("firebase-admin");

// Service Account Information - https://cloud.google.com/iam/docs/service-accounts?_ga=2.150185712.-794759788.1568568960
//const serviceAccount = require("../util/keys/nakama-treehouse-c0de79946801.json");
const { firebaseServiceAccount } = require("../util/config");
admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount),
  storageBucket: "gs://spending-habits.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
