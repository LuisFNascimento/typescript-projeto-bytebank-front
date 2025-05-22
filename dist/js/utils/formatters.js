export function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString('pt-BR', {
            weekday: 'long',
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString('pt-BR', {
            month: "2-digit",
            day: "2-digit"
        });
    }
    return data.toLocaleDateString('pt-BR');
}
