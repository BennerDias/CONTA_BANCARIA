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
        let conta = this.buscarNoArray(numero);

        if(conta != null){

            if(conta.sacar(valor) == true)
            console.log(Colors.fg.green, `\nO Saque na conta numero: ${numero} foi efetuado com sucesso`, Colors.reset);
        } else {
            console.log(Colors.fg.red, `\nA Conta numero: ${numero} não foi encontrada!`, Colors.reset);
        }
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

         if(conta != null){
            conta.depositar(valor)
            console.log(Colors.fg.green, `\nO Saque na conta numero: ${numero} foi efetuado com sucesso`, Colors.reset);
        } else {
            console.log(Colors.fg.red, `\nA conta ${numero} não foi localizada.`)
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        //                                  VOZES DA MINHA CABEÇA 
        // Qual a conta de origem? qual o valor a ser transferido? Qual a conta destino? 
        // saldo suficiente na conta origem ? saldo -= valor // SaldoContaDestino += valor : Saldo insuficiente para transferência.

        if(contaOrigem === null){
            console.log(Colors.fg.red, `Confira a conta de origem, o numero deve ser válido para realizar uma transferência`, Colors.reset)
        } else if (contaDestino === null) {
          console.log(Colors.fg.red, `Confira a conta de destino, o numero deve ser válido para realizar uma transferência`, Colors.reset)
        } else {
            if(contaOrigem.saldo > valor ){
            contaOrigem.saldo -= valor;
            contaDestino.saldo += valor;
            console.log(Colors.fg.green, `Transferência realizada com sucesso...`)
           // console.log(Colors.fg.green, `Transferência realizada com sucesso... \n${contaDestino.visualizar()}`, Colors.reset) // DESNECESSÁRIO MAS QUERO SABER COMO FAZER.
            } else {
                console.log(Colors.fg.red, `Saldo insuficiente para realizar a transferencia...`)
            }
        }
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