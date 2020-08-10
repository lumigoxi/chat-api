const msgModel = require("./msgModel");
const { config } = require("../../config/config");
const db = require("mongoose");

const URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

db.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const save = async (message) => {
  try {
    const Message = new msgModel(message);
    const result = await Message.save();
    return result;
  } catch (error) {
    return error;
  }
};

const list = async () => {
  try {
    const Messages = await msgModel.find();
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

module.exports = {
  save,
  list,
  remove,
};
