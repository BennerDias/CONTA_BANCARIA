import { ContaPoupanca } from './../src/Model/ContaPoupanca';
import { ContaCorrente } from './../src/Model/ContaCorrente';
import { Colors } from './../src/util/Colors/Colors';
import * as leia from 'readline-sync';
import { ContaController } from '../src/Controller/ContaController';

// numero, agencia, tipo, titular, saldo

export function main() {
    //instância da classe ContaController
    let contas: ContaController = new ContaController();

    // Variáveis Auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupança']

    // APENAS PARA TESTES.

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();


    while (true) {

        console.log(Colors.bg.black, Colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        Colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 9) {
            console.log(Colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong, "\n\nCriar Conta\n\n", Colors.reset);
                agencia = leia.questionInt('Digite o número da agência: ')

                titular = leia.question('Digite o nome do Titular da conta: ')

                console.log('Qual o tipo da conta: ')
                tipo = leia.keyInSelect(tiposContas, '', {cancel: false}) + 1;
                

                saldo = leia.questionFloat('Digite o saldo da conta: ')

                switch(tipo){
                    case 1:
                        limite = leia.questionFloat('Digite o limite da conta (R$): ')
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break;
                    case 2:
                        aniversario = leia.questionInt('Digite o dia do aniversário da Conta Poupança: ')
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        break;
                }

                
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", Colors.reset);
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", Colors.reset);
                numero = leia.questionInt('Digite o numero da conta: ')
                contas.procurarPorNumero(numero)
                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", Colors.reset);

                numero = leia.questionInt('Digite o número da Conta: ')

                let conta = contas.buscarNoArray(numero)

                if(conta != null){
                    agencia = leia.questionInt('Digite o numero da agência: ')

                    titular = leia.question('Digite o nome do titular da conta: ')

                    tipo = conta.tipo;

                    saldo = leia.questionFloat('Digite o saldo da conta (R$): ')

                    switch(tipo){
                    case 1:
                        limite = leia.questionFloat('Digite o limite da conta (R$): ')
                        contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                        break;
                    case 2:
                        aniversario = leia.questionInt('Digite o dia do aniversário da Conta Poupança: ')
                        contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                        break;
                    }
                } else {
                    console.log(Colors.fg.red, `\nA Conta numero: ${numero} mão foi encontrada!`, Colors.reset)
                }

                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", Colors.reset);

                numero = leia.questionInt('Digite o número da conta: ')
                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(Colors.fg.whitestrong, "\n\nSaque\n\n", Colors.reset);

                numero = leia.questionInt('Qual o numero da conta que você deseja sacar? ')

                valor = leia.questionFloat('Digite o valor do saque: ')

                contas.sacar(numero, valor)


                keyPress()
                break;
            case 7:
                console.log(Colors.fg.whitestrong, "\n\nDepósito\n\n", Colors.reset);

                numero = leia.questionInt('Qual o numero da conta que você deseja depositar? ')


                valor = leia.questionFloat('Digite o valor do depósito: ')

                contas.depositar(numero, valor)

                keyPress()
                break;
            case 8:
                console.log(Colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", Colors.reset);

                numero = leia.questionInt('Qual o numero da conta de origem? ')

                numeroDestino = leia.questionInt('Qual o numero da conta que receberá a transferência? ')
                
                valor = leia.questionFloat('Qual valor você deseja transferir? (R$) ')

                contas.transferir(numero, numeroDestino, valor)

                keyPress()
                break;
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}

main();