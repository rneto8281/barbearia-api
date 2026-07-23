import { Router } from "express";
import { AgendamentoController } from "../controllers/AgendamentoController.js";

export const rotas = Router();
const agendamentoController = new AgendamentoController();

rotas.post("/agendamentos", agendamentoController.criar);