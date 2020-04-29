
// CÁLCULO DE IMC

// Esse programa calcula o IMC e nível de obesidade de uma pessoa.

const nome = 'Mateus'
const peso = 135
const altura = 1.70

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
        console.log('Classificação: SOBREPESO. Nível de obesidade: 1.')
    } else if (imc < 39.9) {
        console.log('Classificação: OBESIDADE. Nível de obesidade: 2.')
    } else {
        console.log('Classificação: OBESIDADE GRAVE. Nível de obesidade: 3.')
}

// Incrementar cálculo com essa tabela:

// VEJA A INTERPRETAÇÃO DO IMC

// IMC	                CLASSIFICAÇÃO	OBESIDADE (GRAU)
// MENOR QUE 18,5	    MAGREZA	        0
// ENTRE 18,5 E 24,9	NORMAL	        0
// ENTRE 25,0 E 29,9	SOBREPESO	    I
// ENTRE 30,0 E 39,9	OBESIDADE	    II
// MAIOR QUE 40,0	    OBESIDADE GRAVE	III