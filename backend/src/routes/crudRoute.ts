import { Router } from "express";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/tasksController";

export const routerTasks = Router();

routerTasks.post("/tasks", createTask);
routerTasks.get("/tasks", getTasks);
routerTasks.get("/tasks/:id", getTaskById);
routerTasks.put("/tasks/:id", updateTask);
routerTasks.delete("/tasks/:id", deleteTask);
