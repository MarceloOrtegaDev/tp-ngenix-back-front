import mongoose, { Document } from "mongoose"

interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema<IUser> ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export const userModel = mongoose.model<IUser>("User", userSchema)