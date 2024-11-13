const ask = require('readline-sync') //  Declaramos uma constante para dar inicio ao trabalho.

let calculadora = true // Declaramos nossa variavel let como "calculadora" com o valor "true", 

while (calculadora) { // 
    console.clear()

    console.log(` 
    [1] - Calcular
    [0] - Sair
    `)
    
    let opcao = Number(ask.question("Digite uma opcao: ")) //

    switch (opcao) { // Em "swuitch" o usuario escolhe qual opção será realizada.
        case 1:
            console.clear()  
            console.log(`
            [1] - Soma
            [2] - Subtracao
            [3] - Multiplicacao
            [4] - Divisao
            [5] - Mod
            `)      
    
            let efetuar = Number(ask.question("Digite a opcao desejada: ")) // Pede para escolher uma das opções abaixo.

            let num1 = Number(ask.question("Digite o primeiro numero: ")) // De o primeiro valor para ser calculado com o segundo valor.
            let num2 = Number(ask.question("Digite o segundo numero: ")) 

            switch (efetuar) { // Damos inicio as operaços 
                case 1:
                    console.log(somar(num1, num2)) // Caso você digite "1" o primeiro número será somado com o segundo número.
                    break
                case 2:
                    console.log(subtrair(num1, num2)) // 
                    break
                case 3:
                    console.log(multiplicacao(num1, num2)) // 
                    break
                case 4:
                    console.log(divisao(num1, num2)) //                                                                                                                                   
                    break
                case 5:
                    console.log(mod(num1, num2)) // 
                    break
                default:
                    console.log("Opcao invalida, tente novamente")
                    break
            }
            break
        case 0:
            calculadora = false // Caso a pesssoa digite "0" a operação sera dada como invalidada.
            break
        default:
            console.log("Opcao invalida, tente novamente")
            break
    }
    
ask.question("Tecle enter para continuar...") // Clicando em enter a pagina ira retornar para inicio. 
}

// funções da operações 
function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function divisao(num1, num2) {
    return num1 / num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

function mod(num1, num2) {
    return num1 % num2
}
