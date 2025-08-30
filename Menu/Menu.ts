import { Colors } from './../src/util/Colors/Colors';
import * as leia from 'readline-sync';

console.log(Colors.FgYellow + `
*****************************************************
                                                    
            BANCO DO BRAZIL COM Z                    
                                                    
*****************************************************
                                                    
            1 - Criar Conta                          
            2 - Listar todas as Contas               
            3 - Buscar Conta por Numero              
            4 - Atualizar Dados da Conta             
            5 - Apagar Conta                         
            6 - Sacar                                
            7 - Depositar                            
            8 - Transferir valores entre Contas      
            9 - Sair                                 
                                                    
*****************************************************
Entre com a opção desejada:
` );

let opcao: number = leia.questionInt('Digite a opcao desejada: ')

function MenuSelection(opcao: number){
    switch(opcao){
        case 1:
            console.log('Criar conta...')
            break
        case 2:
            console.log('Listar todas as Contas...')
            break
        case 3:
            console.log('Buscar conta por numero...')
            break
        case 4:
            console.log('Atualizar dados da conta...')
            break
        case 5:
            console.log('Apagar conta...')
            break
        case 6:
            console.log('Sacar...')
            break
        case 7:
            console.log('Depositar...')
            break
        case 8:
            console.log('Transferir valores entre contas...')
            break
        case 9:
            console.log('Saindo...')
        default:
            console.log('Opção inválida, seleciona uma opção válida de 1-9')
    }
}
MenuSelection(opcao);