

// CÁLCULO DE APOSENTADORIA

// Esse programa calcula se uma pessoa já pode se aposentar ou não.

const nome = 'Marcos'
const sexo = 'M' // F ou M
const idade = 75
const contr = 34

const somaContr = idade + contr

// if (sexo == 'F') {
//     if (somaContr >= 85) {
//         console.log(`${nome}, você já pode se aposentar!`)
//     }
//     } else if (sexo == 'M') {
//         if (somaContr >= 95) {
//             console.log(`${nome}, você já pode se aposentar!`)
//         } else {
//         console.log(`${nome}, você ainda não pode se aposentar.`)
//     }
// } else {
//     console.log(`Dados incorretos. Verifique e tente novamente.`)
// }

// UPGRADE!

const homemAposent = sexo == 'M' && contr >= 35 && somaContr >= 95
const mulherAposent = sexo == 'F' && contr >= 30 && somaContr >= 85

if (homemAposent || mulherAposent) {
    console.log(`${nome}, você já pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar.`)
}