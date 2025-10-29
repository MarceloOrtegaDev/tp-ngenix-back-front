import express from "express";
import { routerTasks } from "./routes/crudRoute";
import { userRouter } from "./routes/userRoute";
import cors from "cors";
import { ConectDb } from "./db/db";
import morgan from "morgan";
import { MONGO_DB_CONNECTION, PORT } from "./env/env";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", userRouter);
app.use("/api", routerTasks);
// Iniciar servidorcd
const startServer = async () => {
  try {
    await ConectDb.createDb().conexion(MONGO_DB_CONNECTION!);
    console.log("MongoDB conectado correctamente");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
};

startServer();
