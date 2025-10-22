"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class ConectDb {
    static createDb() {
        if (!ConectDb.instance) {
            ConectDb.instance = new ConectDb();
        }
        return ConectDb.instance;
    }
    async conexion(url) {
        try {
            if (!url) {
                throw new Error("La URL de conexión no puede ser undefined");
            }
            await mongoose_1.default.connect(url);
            console.log("Base de datos conectada");
        }
        catch (error) {
            throw new Error("Hubo un problema al conectar la base de datos");
        }
    }
}
exports.ConectDb = ConectDb;
