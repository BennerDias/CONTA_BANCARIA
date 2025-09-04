import { Conta } from "../Model/Conta";

export interface ContaRepository{
    // Na verdade, tudo aqui é apenas a listagem dos métodos, não é criada nenhuma logica aqui dentro, apenas LISTAR
    //Primeiro listamos o CRUD, famoso criar, atualizar, ler e deletar.
    //Depois os métodos que serão executados relativo às contas, elas poderão sacar, depositar e transferir.
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