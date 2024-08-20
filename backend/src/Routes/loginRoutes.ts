import { Router, Request, Response } from "express";
import { Login } from "../models/Login";
import { ILogin } from "../types/types";
import * as bcrypt from 'bcrypt'

export const loginRoutes = Router();


// =========== CREATE LOGIN =============
loginRoutes.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(422).json({ error: "Campos obrigatórios" });
    return;
  }

  // Criptografar senha
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const login = { username, password: passwordHash };

  try {
    await Login.create(login);

    res.status(201).json({ message: "Usuário criado" });
  } catch (error) {
    res.status(500).json({ message: "Não foi possível criar usuário (Username já existente)" });
  }
});


// ========== READ LOGIN =============
loginRoutes.get("/", async (req, res) => {
  try {
    const login = await Login.find();
    res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ message: "Não há usuários" });
  }
});


// ========== DELETE LOGIN =============
loginRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const login = await Login.findById(id);

  if (!login) {
    res.status(404).json({ error: "Usuário não encontrado" });
    return;
  }

  try {
    await Login.deleteOne({ _id: id });

    res.status(200).json({ message: "Usuário deletado" });
  } catch (error) {
    res.status(500).json({ message: "Não foi possível deletar usuário" });
  }
});

