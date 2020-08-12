const { Router } = require("express");
const { success, error } = require("../../network/response");
const {
  sendMessage,
  listMessages,
  removeMessage,
  updateMessage,
  getMessage,
} = require("./msgService");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await listMessages(req.query);
    success(req, res, response, 200);
  } catch (err) {
    error(req, res, "Message is empty", 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const Message = await getMessage(req.params);
    success(req, res, Message, 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await sendMessage(req.body);
    success(req, res, response, 201);
  } catch (err) {
    error(req, res, "Cant save message", 500);
    console.log("[msgController]" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await removeMessage(req.params);
    success(req, res, result, 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = {
      id: req.params.id,
      message: req.body.message,
    };
    const result = await updateMessage(data);
    success(req, res, result.message, 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
});

module.exports = router;
