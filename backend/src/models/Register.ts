import mongoose from "mongoose";


const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const RegisterSchema = new Schema({
    id: ObjectId,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
    },

})

export const Register = mongoose.model("register", RegisterSchema);

