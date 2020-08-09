const { Router } = require("express");
const { success, error } = require("../../network/response");
const { sendMessage, listMessages } = require("./msgService");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await listMessages();
    success(req, res, response, 200);
  } catch (err) {
    error(req, res, "Message is empty", 500);
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    const response = await sendMessage(body);
    success(req, res, response, 201);
  } catch (err) {
    error(req, res, "Cant save message", 500);
    console.log("[msgController]" + err);
  }
});

module.exports = router;
