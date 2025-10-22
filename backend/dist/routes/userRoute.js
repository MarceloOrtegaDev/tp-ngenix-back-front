"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/register", userControllers_1.registerUser);
exports.userRouter.post("/login", (req, res) => {
    res.send("Inicio de sesión de usuario");
});
