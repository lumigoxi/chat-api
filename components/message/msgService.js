const { save, list } = require("./msgRepository");

const sendMessage = (body) => {
  if (!body.user || !body.message) {
    console.log("[msgService] No data received");
    throw new Error("you did not send all the necessary data");
  }

  const message = { ...body, date: new Date() };
  return save(message);
};

const listMessages = () => {
  return list();
};

module.exports = {
  sendMessage,
  listMessages,
};
