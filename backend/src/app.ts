import express from "express";
import cors from "cors";
import logger from "morgan";
import { loginRoutes } from "./Routes/loginRoutes";
import { registerRoutes } from "./Routes/registerRoutes";
import { authRoute } from "./Routes/auth.route";
import { swaggerRoute } from "./Routes/swagger.route";

export const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// Integra o endpoint na aplicação
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/auth", authRoute);
app.use("/doc", swaggerRoute);
