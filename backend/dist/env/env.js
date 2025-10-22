"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.MONGO_DB_CONNECTION = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGO_DB_CONNECTION = process.env.MONGODB_CONNECTION_STRING;
exports.JWT_SECRET = process.env.JWT_SECRET;
