export class Armazenador {
    private constructor() {}

    static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
 
    static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null;        
        }
        // Se houver reviver, usa o método JSON.parse com o reviver
        if (reviver) {
            return JSON.parse(valor, reviver) as T;
        } 
        // Se não houver reviver, retorna o valor como está
        return JSON.parse(valor) as T;
        
    }

}