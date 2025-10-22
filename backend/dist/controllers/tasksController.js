"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const TasksModel_1 = require("../models/TasksModel");
const createTask = async (req, res) => {
    try {
        const { titulo, descripcion, estado } = req.body;
        if (!titulo || !descripcion || !estado) {
            res.status(400).json({ message: "Todos los campos son obligatorios" });
            return;
        }
        const nuevaTarea = new TasksModel_1.tasksModel({ titulo, descripcion, estado });
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear la tarea", error });
    }
};
exports.createTask = createTask;
const getTasks = async (req, res) => {
    try {
        const tareas = await TasksModel_1.tasksModel.find();
        res.status(200).json(tareas);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener las tareas", error });
    }
};
exports.getTasks = getTasks;
const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const tarea = await TasksModel_1.tasksModel.findById(id);
        if (!tarea) {
            res.status(404).json({ message: "Tarea no encontrada" });
            return;
        }
        res.status(200).json(tarea);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener la tarea", error });
    }
};
exports.getTaskById = getTaskById;
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, estado } = req.body;
        const tareaActualizada = await TasksModel_1.tasksModel.findByIdAndUpdate(id, { titulo, descripcion, estado }, { new: true });
        if (!tareaActualizada) {
            res.status(404).json({ message: "Tarea no encontrada" });
            return;
        }
        res.status(200).json(tareaActualizada);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar la tarea", error });
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const tareaEliminada = await TasksModel_1.tasksModel.findByIdAndDelete(id);
        if (!tareaEliminada) {
            res.status(404).json({ message: "Tarea no encontrada" });
            return;
        }
        res.status(200).json({ message: "Tarea eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea", error });
    }
};
exports.deleteTask = deleteTask;
