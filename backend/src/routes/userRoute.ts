import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userControllers";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);