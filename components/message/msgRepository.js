const msgModel = require("./msgModel");

const save = async (message) => {
  try {
    const Message = new msgModel(message);
    const result = await Message.save();
    return result;
  } catch (error) {
    return error;
  }
};

const list = async (query) => {
  try {
    const Messages = await msgModel.find(query);
    return Messages;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    const result = await msgModel.findByIdAndDelete(id);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (id, message) => {
  const updatedMessage = await msgModel.findByIdAndUpdate(
    { _id: id },
    { message },
    { new: true }
  );

  return updatedMessage;
};

const getOne = async (id) => {
  const Message = await msgModel.findById(id);
  return Message;
};

module.exports = {
  save,
  list,
  remove,
  update,
  getOne,
};
