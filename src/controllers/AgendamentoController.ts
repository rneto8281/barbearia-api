import { Request, Response } from "express";
import { AgendamentoService } from "../services/AgendamentoService.js";
import { AgendamentoRepository } from "../repositories/AgendamentoRepository.js";

const repository = new AgendamentoRepository();
const service = new AgendamentoService(repository);

export class AgendamentoController {
  public criar(request: Request, response: Response) {
    try {
      const { cliente, dataHora } = request.body;
      const agendamento = service.executar(cliente, dataHora);
      return response.status(201).json(agendamento);
    } catch (error: any) {
      return response.status(400).json({ erro: error.message });
    }
  }
}