export class Armazenador {
    constructor() { }
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        // Se houver reviver, usa o método JSON.parse com o reviver
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        // Se não houver reviver, retorna o valor como está
        return JSON.parse(valor);
    }
}
