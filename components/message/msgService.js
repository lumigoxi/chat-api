const { save, list, remove } = require("./msgRepository");

const sendMessage = async (body) => {
  try {
    if (!body.user || !body.message) {
      console.log("[msgService] No data received");
      throw new Error("you did not send all the necessary data");
    }

    const message = { ...body, date: new Date() };
    const result = await save(message);

    return "Message sent succesfuly";
  } catch (error) {
    console.log("[msgService] " + error);
    return "Cant send message";
    // throw new Error("Cant send message");
  }
};

const listMessages = () => {
  return list();
};

const removeMessage = async ({ id }) => {
  if (!id) throw new Error("ID not valid");

  const result = await remove(id);

  if (!result) {
    throw new Error("Cant delete message");
  }

  return "Message has been eliminate";
};

module.exports = {
  sendMessage,
  listMessages,
  removeMessage,
};
