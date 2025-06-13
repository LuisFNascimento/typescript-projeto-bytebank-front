import { agruparTransacoes } from "../components/agruparTransacoes.js";
export type ResumoTransacoes = {
    totalDepositos: number;
    totalTransferencias: number;
    totalPagamentosBoleto: number;
}