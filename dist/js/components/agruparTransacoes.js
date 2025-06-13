import { TipoTransacao } from "../types/TipoTransacao.js";
export function agruparTransacoes(transacoes) {
    const resumo = {
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
