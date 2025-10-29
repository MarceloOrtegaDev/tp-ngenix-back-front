import express from "express";
import { routerTasks } from "./routes/crudRoute";
import { userRouter } from "./routes/userRoute";
import cors from "cors";
import { ConectDb } from "./db/db";
import morgan from "morgan";
import { MONGO_DB_CONNECTION } from "./env/env";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(morgan("dev"));

app.use("/api/auth", userRouter);
app.use("/api", routerTasks);
// Iniciar servidor
const startServer = async () => {
  try {
    await ConectDb.createDb().conexion(MONGO_DB_CONNECTION!);
    console.log("MongoDB conectado correctamente");
    
    app.listen(4000, () => {
      console.log(`Servidor corriendo en http://localhost:4000`);
    });
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
};

startServer();
