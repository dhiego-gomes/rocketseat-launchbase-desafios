const nome = 'Diná'
const sexo = 'F' // F ou M
const idade = 55
const contr = 30

const somaContr = idade + contr

if (sexo == 'F') {
    if (somaContr >= 85 && contr >= 30) {
        console.log(`${nome}, você já pode se aposentar!`)
    } else {
        console.log(`${nome}, você já pode se aposentar!`)     
    }
}

if (sexo == 'M') {
    if (somaContr >= 95 && contr >= 35) {
        console.log(`${nome}, você já pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar.`)
    }
}