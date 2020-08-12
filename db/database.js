const { config } = require("../config/config");
const db = require("mongoose");
const URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

const DB_CONNECT = () => {
  try {
    db.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log("[database.js] " + error);
  }
};

module.exports = {
  DB_CONNECT,
};
