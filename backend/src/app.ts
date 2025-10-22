import express from "express";
import { routerTasks } from "./routes/crudRoute";
import { userRouter } from "./routes/userRoute";
import cors from "cors";
import { ConectDb } from "./db/db";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(morgan("dev"));

app.use("/auth", userRouter);
app.use("/api", routerTasks);
// Iniciar servidor
app.listen(4000, () => {
    ConectDb.createDb().conexion("mongodb://localhost:27017/miApp")
  console.log(`Servidor corriendo en http://localhost:4000`);
});
