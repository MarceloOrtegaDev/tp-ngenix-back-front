"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const userModel_1 = require("../models/userModel");
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel_1.userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Error" });
        }
        const crearUsuario = await userModel_1.userModel.create({ email, password });
        if (crearUsuario) {
            return res.status(200).json({ msg: "Usuario creado" });
        }
        return res.status(404).json({ msg: "hubo un problema al crear el usuario" });
    }
    catch (error) {
        console.error(error);
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel_1.userModel.findOne({ email, password });
        if (user) {
            return res.status(200).json({ msg: "Login exitoso" });
        }
        return res.status(401).json({ msg: "Credenciales inválidas" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};
exports.loginUser = loginUser;
