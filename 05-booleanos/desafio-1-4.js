const abastecimentos = {
    valor: 0,
    combustivel: [],
    km: [],
    distancia: 0
}

function criaAbastecimento(meuAbastecimento) {
    abastecimentos.combustivel.push(meuAbastecimento)

    if (meuAbastecimento.tipo === 'gasolina') {
        abastecimentos.valor += meuAbastecimento.valor
    } else {
        abastecimentos.valor += meuAbastecimento.valor
    }
}

function acharMaiorAbastecimento(tipo) {
    maiorAbastecimento = 0
    maiorValor = 0

    for (abastecimento of abastecimentos.combustivel) {
        if (abastecimento.tipo == tipo && abastecimento.valor > maiorValor) {
            maiorValor = abastecimento.valor
            maiorAbastecimento = abastecimento
        }
    }
    
    return maiorAbastecimento
}

function valorPorKm() {
    return abastecimentos.valor / abastecimentos.distancia
}

function contarAbastecimentos() {
    let count = {
        gasolina: 0,
        etanol: 0
    }

    for (abastecimento of abastecimentos.combustivel) {
        if (abastecimento.tipo == 'gasolina') {
            count.gasolina++
        } else {
            count.etanol++
        }
    }

    return count
}

function somarValorAbastecimentos() {
    let soma = {
    gasolina: 0,
    etanol: 0
    }

    for (abastecimento of abastecimentos.combustivel) {
        if (abastecimento.tipo == 'gasolina') {
            soma.gasolina += abastecimento.valor
        } else {
            soma.etanol += abastecimento.valor
        }
    }

    return soma
}

criaAbastecimento( { tipo: 'gasolina', valor: 44.20 } )
criaAbastecimento( { tipo: 'gasolina', valor: 40.39 } )
criaAbastecimento( { tipo: 'gasolina', valor: 44.75 } )
criaAbastecimento( { tipo: 'etanol', valor: 20 } )
criaAbastecimento( { tipo: 'etanol', valor: 33.59 } )
criaAbastecimento( { tipo: 'etanol', valor: 36.78 } )
criaAbastecimento( { tipo: 'etanol', valor: 27 } )
criaAbastecimento( { tipo: 'etanol', valor: 30.08 } )

function adicionaKm(km) {
    abastecimentos.km.push(km)
}

adicionaKm(366)
adicionaKm(371)
adicionaKm(396)
adicionaKm(201)
adicionaKm(283)
adicionaKm(292)
adicionaKm(213)
adicionaKm(253)

for (distancia of abastecimentos.km) {
    abastecimentos.distancia += distancia
}

console.log(`Km total: ${abastecimentos.distancia}`)
console.log(`Valor total: R$ ${abastecimentos.valor}`)
console.log('Valor total por tipo de combustivel:', somarValorAbastecimentos())
console.log(`Custo por km: R$ ${(valorPorKm().toFixed(2))}`)
console.log('Maior abastecimento:')
console.log(acharMaiorAbastecimento('gasolina'))
console.log(acharMaiorAbastecimento('etanol'))
console.log(`Total de abastecimentos: ${(abastecimentos.combustivel.length)}`, contarAbastecimentos())