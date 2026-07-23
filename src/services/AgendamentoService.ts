import { AgendamentoRepository } from "../repositories/AgendamentoRepository.js";
import { Agendamento } from "../models/Agendamento.js";

export class AgendamentoService {
  constructor(private agendamentoRepository: AgendamentoRepository) {}

  public executar(cliente: string, dataHoraString: string): Agendamento {
    const dataAgendamento = new Date(dataHoraString);

    if (dataAgendamento < new Date()) {
      throw new Error("Não é possível agendar um horário no passado.");
    }

    const horarioOcupado = this.agendamentoRepository.buscarPorData(dataAgendamento);
    if (horarioOcupado) {
      throw new Error("Este horário já está reservado.");
    }

    const novoAgendamento = new Agendamento(cliente, dataAgendamento);
    return this.agendamentoRepository.salvar(novoAgendamento);
  }
}