const { Schema, model } = require("mongoose");

const msgSchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const msgModel = model("message", msgSchema);

module.exports = msgModel;
