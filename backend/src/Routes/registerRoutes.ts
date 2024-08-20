import { Router } from "express";
import { Register } from "../models/Register";
import { IRegister } from "../types/types";

export const registerRoutes = Router();


// Rotas da API
// ============== CREATE ==================
registerRoutes.post("/", async (req, res) => {
  const { name, email, telephone, address, cpf } = req.body;

  if (!cpf || !email) {
    res.status(422).json({ error: "O email e cpf são obrigatórios" });
    return;
  }

  const user = { name, email, telephone, address, cpf };


  try {
    // criando dados
    await Register.create(user);

    res.status(201).json({ message: "Registro criado" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// ============ READ ===================
registerRoutes.get("/", async ({ req, res }: any) => {
  try {
    const users = await Register.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

registerRoutes.get("/:id", async (req, res) => {

  try {
    const user = await Register.findById(req.params.id);

    if (!user) {
      res.status(404).json({ error: "Registro não encontrado" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// ========== UPDATE ==================
registerRoutes.put("/:id", async (req: any, res: any) => {
  const id = req.params.id;

  const { name, email, telephone, address, cpf } = req.body;

  const user = {
    name, email, telephone, address, cpf };

  try {
    const updateUser = await Register.updateOne({ _id: id }, user);

    if (updateUser.matchedCount === 0) {
      res.status(422).json({ error: "Registro não encontrado" });
      return;
    } else if (updateUser){
      res.status(200).json({ message: "Registro atualizado" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// ============== DELETE ==================
registerRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const user = await Register.findById(id);

  if (!user) {
    res.status(404).json({ error: "Registro não encontrado" });
    return;
  }

  try {
    await Register.deleteOne({ _id: id });

    res.status(200).json({ message: "Registro deletado" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
