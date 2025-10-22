import { Router } from "express";
import { registerUser } from "../controllers/userControllers";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", (req, res) => {
    res.send("Inicio de sesión de usuario");
});