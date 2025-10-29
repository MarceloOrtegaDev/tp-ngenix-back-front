"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crudRoute_1 = require("./routes/crudRoute");
const userRoute_1 = require("./routes/userRoute");
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
const morgan_1 = __importDefault(require("morgan"));
const env_1 = require("./env/env");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/api", userRoute_1.userRouter);
app.use("/api", crudRoute_1.routerTasks);
// Iniciar servidorcd
const startServer = async () => {
    try {
        await db_1.ConectDb.createDb().conexion(env_1.MONGO_DB_CONNECTION);
        console.log("MongoDB conectado correctamente");
        app.listen(env_1.PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${env_1.PORT}`);
        });
    }
    catch (err) {
        console.error("Error al conectar a MongoDB:", err);
        process.exit(1);
    }
};
startServer();
