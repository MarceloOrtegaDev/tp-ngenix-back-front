import dotenv from 'dotenv';
dotenv.config();

export const MONGO_DB_CONNECTION = process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongo:27017/miApp';
export const PORT = process.env.PORT || 4000;
