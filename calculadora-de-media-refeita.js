// Crie um arquivo calculadora-de-media.js Dentro dele, crie um programinha que vai receber 6 notas, calcular a média e dizer se a aluna foi aprovada, reprovada ou ficou em recuperação.

// regras:

// para ser aprovada a média tem que ser maior ou igual 7
// para ser reprovada a média tem que ser menor que 5
// para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7
// Para pegar inputs no terminal precisamos usar o 'readline-sync'

const readlineSync = require ( 'readline-sync' )
console.log ( `## CALCULADORA DE NOTAS ## ` )

const somaNotas = () => {
    var soma = 0
        for (let i = 0; i < 6; i++ ) {
            const entrada = parseInt ( readlineSync.question ( `Insira a nota ${i+1}: ` ) )
            soma += entrada
}
return soma
}

const calculaMedia = ( notas ) => {
    var resultado = notas / 6
    return resultado
}

const mensagem = (media) => {
    console.log ( media >= 7 ? 'Aprovado' : console.log ( media <= 5 ? 'Reprovado' : 'Recuperação'))
}

mensagem ( calculaMedia (somaNotas()) )

