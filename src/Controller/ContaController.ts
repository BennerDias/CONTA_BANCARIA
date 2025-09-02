import { Conta } from "../Model/Conta";
import { ContaRepository } from "../Repository/ContaRepository";

export class ContaController implements ContaRepository{

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        
    }

    atualizar(conta: Conta): void {
        
    }

    sacar(numero: number, valor: number): void {
        
    }

    depositar(numero: number, valor: number): void {
        
    }

    transferir(numerOrigem: number, numeroDestino: number, valor: number): void {
        
    }

    deletar(numero: number): void {
        
    }
}