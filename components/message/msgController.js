const { Router } = require("express");
const { success } = require("../../network/response");

const router = Router();

router.get("/", (req, res) => {
  success(req, res, "Lista de mensajes");
});

module.exports = router;
