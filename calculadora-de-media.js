//Código

const input1 = require("readline-sync")
const input2 = require("readline-sync")
const input3 = require("readline-sync")
const input4 = require("readline-sync")
const input5 = require("readline-sync")
const input6 = require("readline-sync")

console.log('== Calculadora das minhas médias ==')
const nota1 = input1.question('Primeira Nota:  ')
const nota2 = input2.question('Segunda Nota:  ')
const nota3 = input3.question('Terceira Nota:  ')
const nota4 = input4.question('Quarta Nota:  ')
const nota5 = input5.question('Quinta Nota:  ')
const nota6 = input6.question('Sexta Nota:  ')

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6))/6

if (parseFloat(nota1)>10 || parseFloat(nota2)>10 || parseFloat(nota3)>10 || parseFloat(nota4)>10 || parseFloat(nota5)>10 || parseFloat(nota6)>10 ){
    console.log("Alguma nota inválida foi inserida. Por favor, adicione apenas notas de 0 a 10.")
    } else {
    console.log(media)
        if (media <= 10 && media >= 7) {
        console.log('Parabéns, você foi aprovada!')
            } else if (media < 7 && media >=5) {
            console.log('Você terá uma nova chance na Recuperação para melhorar as notas.')
                } else {
                console.log('Sua média foi ' + media + ' e, infelizmente, foi reprovada.')
                    }
        }
