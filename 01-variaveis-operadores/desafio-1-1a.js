
const nome = 'Mateus'
const peso = 76
const altura = 1.75

const imc = peso / (altura * altura)

if (imc >= 24.9) {
    console.log(`${nome}, seu IMC é ${imc}. Você está acima do peso.`)
} else {
    console.log(`${nome}, seu IMC é ${imc}. Você não está acima do peso.`)
}

if (imc < 18.5) {
    console.log('Classificação: MAGREZA. Nível de obesidade: 0.')
    } else if (imc < 24.9) {
        console.log('Classificação: NORMAL. Nível de obesdade: 0.')
    } else if (imc < 29.9) {
        console.log('Classificação: OBESIDADE. Nível de obesidade: 1.')
    } else if (imc < 39.9) {
        console.log('Classificação: OBESIDADE SEVERA. Nível de obesidade: 2.')
    } else {
        console.log('Classificação: OBESIDADE MÓRBIDA. Nível de obesidade: 3.')
}