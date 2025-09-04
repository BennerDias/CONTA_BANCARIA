import { Conta } from "../Model/Conta";
import { ContaRepository } from "../Repository/ContaRepository";
import { Colors } from "../util/Colors/Colors";

export class ContaController implements ContaRepository{

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        buscaConta != null ? buscaConta.visualizar() : console.log(Colors.fg.red, `\nA Conta numero: ${numero}, não foi encontrada!`)
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(Colors.fg.green, `\nA conta número: ${conta.numero} foi criada com sucesso!`, Colors.reset)
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta != null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(Colors.fg.green, `\nA Conta numero: ${conta.numero} foi atualizada com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red, `\nA Conta numero: ${conta.numero} mão foi encontrada!`, Colors.reset)
        }
        
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log(Colors.fg.green, `\nA Conta numero: ${numero} foi apagada com sucesso!`, Colors.reset);
        } else {
            console.log(Colors.fg.red, `\nA Conta numero: ${numero} não foi encontrada!`, Colors.reset);
        }

    }


    sacar(numero: number, valor: number): void {
        
    }

    depositar(numero: number, valor: number): void {
        
    }

    transferir(numerOrigem: number, numeroDestino: number, valor: number): void {
        
    }

        
    // Método auxiliar para gerar número da conta
    gerarNumero(): number{
        return ++ this.numero;
    }

    // Checa se uma conta existe

    buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas){
            if(conta.numero === numero)
                return conta;
        }

        return null;
    }
}