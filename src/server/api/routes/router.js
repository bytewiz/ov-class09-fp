"use strict";

const express = require("express");
const router = express.Router();

const modulesRouter = require("./modules.router");
const userRouter = require("./user.router");
const authRouter = require("./auth.router");
const refreshTokenRouter = require("./refresh.token.router");
const mailRouter = require("./mail.router");

// /api/users
router.use("/users", userRouter);

// /api/auth
router.use("/auth", authRouter);

// /api/modules
router.use("/modules", modulesRouter);

router.use("/mail", mailRouter);

router.use("/token", refreshTokenRouter);

module.exports = router;
