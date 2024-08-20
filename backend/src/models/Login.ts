import mongoose from "mongoose";


const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const LoginSchema = new Schema({
    id: ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
})

export const Login = mongoose.model("login", LoginSchema);

