export class Agendamento {
  id: string;
  cliente: string;
  dataHora: Date;

  constructor(cliente: string, dataHora: Date) {
    this.id = Math.random().toString(36).substring(2, 9);
    this.cliente = cliente;
    this.dataHora = dataHora;
  }
}