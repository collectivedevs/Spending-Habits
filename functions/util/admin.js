const admin = require("firebase-admin");


const { firebaseServiceAccount, firebaseStorageBucket } = require("../util/config");
admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount),
  storageBucket: firebaseStorageBucket.bucket
});

const db = admin.firestore();

module.exports = { admin, db };
