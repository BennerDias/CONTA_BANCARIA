import { Conta } from "../Model/Conta";

export interface ContaRepository{
    // CRUD
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    // LISTAGEM DOS METODOS
    sacar(numero:number, valor:number): void;
    depositar(numero: number, valor: number): void;
    transferir(numerOrigem: number, numeroDestino: number, valor: number): void;
    
}