import { Agendamento } from "../models/Agendamento.js";

export class AgendamentoRepository {
  private agendamentos: Agendamento[] = [];

  public salvar(agendamento: Agendamento): Agendamento {
    this.agendamentos.push(agendamento);
    return agendamento;
  }

  public buscarPorData(data: Date): Agendamento | undefined {
    return this.agendamentos.find(
      (ag) => ag.dataHora.getTime() === data.getTime()
    );
  }
}