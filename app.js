const express = require("express");
const routes = require("./network/routes");
const { DB_CONNECT } = require("./db/database");

DB_CONNECT();
const app = express();
app.use(express.json());
app.use("/", express.static("./public"));
routes(app);

app.listen(8000, () => console.log("Listening on http://localhost:8000"));
