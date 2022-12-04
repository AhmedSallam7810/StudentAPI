const express = require("express");
const adminController = require("./admin.Controller");
const auth = require("../../middlewares/auth");
const idValidator = require("../../middlewares/idValidator");
const router = express.Router();

router.param("id", idValidator);

router.put("/:id", auth, adminController);

module.exports = router;
