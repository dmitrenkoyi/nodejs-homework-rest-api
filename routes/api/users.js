const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const { joiUserSchema } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(joiUserSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validation(joiUserSchema), ctrlWrapper(ctrl.login));

router.get("/logout");

router.get("./current");

router.patch("/");

module.exports = { usersRouter: router };
