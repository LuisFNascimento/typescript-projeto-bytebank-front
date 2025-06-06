import { TipoTransacao } from "../types/TipoTransacao.js";
import { ResumoTransacoes } from "../types/ResumoTransacoes";

export function agruparTransacoes(transacoes: { tipoTransacao: TipoTransacao, valor: number }[]): ResumoTransacoes {
    const resumo: ResumoTransacoes = {
        totalDepositos: 0,
        totalTransferencias: 0,
        totalPagamentosBoleto: 0
    };

    transacoes.forEach(transacao => {
        switch (transacao.tipoTransacao) {
            case TipoTransacao.DEPOSITO:
                resumo.totalDepositos += transacao.valor;
                break;
            case TipoTransacao.TRANSFERENCIA:
                resumo.totalTransferencias += transacao.valor;
                break;
            case TipoTransacao.PAGAMENTO_BOLETO:
                resumo.totalPagamentosBoleto += transacao.valor;
                break;
        }
    });

    return resumo;
}