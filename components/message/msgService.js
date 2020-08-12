const { save, list, remove, update, getOne } = require("./msgRepository");

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

const listMessages = ({ ...query }) => {
  return list(query);
};

const removeMessage = async ({ id }) => {
  if (!id) throw new Error("ID not valid");

  const result = await remove(id);

  if (!result) {
    throw new Error("Cant delete message");
  }

  return "Message has been eliminate";
};

const updateMessage = async ({ id, message }) => {
  if (!id || !message) {
    throw new Error("Invalidad data");
  }

  const result = await update(id, message);
  return { result, message: "Message has been updated" };
};

const getMessage = async ({ id }) => {
  try {
    const Message = await getOne(id);
    if (!Message) {
      console.log("[msgService] Message dont exist");
      throw new Error("Message not found");
    }
    return Message;
  } catch (error) {
    throw new Error("Message not found");
  }
};

module.exports = {
  sendMessage,
  listMessages,
  removeMessage,
  updateMessage,
  getMessage,
};
