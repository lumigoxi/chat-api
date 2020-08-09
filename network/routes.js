const msgController = require("../components/message/msgController");

const routes = (app) => {
  app.use("/api/message", msgController);
};

module.exports = routes;
