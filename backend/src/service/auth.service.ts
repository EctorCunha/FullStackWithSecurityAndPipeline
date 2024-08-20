import { Login } from "../models/Login";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()


const token = process.env.SECRET_JWT

// Comparação com o banco de dados
export const loginService = async (username: string) => Login.findOne({username: username}).select('+password')


// Geração do token
export const generateToken = (id: any) => jwt.sign({id: id}, token, {expiresIn: 10})
export const refreshToken = (id: any) => jwt.sign(generateToken, 'secret', {expiresIn: 30})