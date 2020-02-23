const { firebaseConfig, firebaseServiceAccount } = require("../util/config");

const test = require('firebase-functions-test')({
    databaseURL: firebaseConfig.databaseURL,
    storageBucket: firebaseConfig.storageBucket,
    projectId: firebaseConfig.projectId,
  }, firebaseServiceAccount);