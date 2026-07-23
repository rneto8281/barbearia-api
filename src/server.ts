import express from "express";
import { rotas } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3333, () => {
  console.log("💈 Servidor da Barbearia rodando na porta 3333!");
});