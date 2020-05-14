
const meusVizinhos = [
    {   nome: 'Maria', mercado: [ 'arroz', 'feijão' ], farmacia: [ 'dorflex', 'dipirona' ] },
    {   nome: 'José', mercado: [ 'arroz', 'carne', 'macarrão' ], farmacia: [ 'barbeador'] },
    {   nome: 'Ana', mercado: [ 'macarrão', 'leite', 'ovos' ], farmacia: [ 'pomada', 'dorflex', 'band-aid' ] }
]

function mostraLista() {
    for (let vizinho of meusVizinhos) {
        console.log(`Sr(a) ${vizinho.nome}: do mercado precisa de ${vizinho.mercado.join(', ')} e da farmácia precisa de ${vizinho.farmacia.join(', ')}.`)
    }
}

mostraLista()

function somaItens() {
    let soma = 0
    for (let itens = 0; itens < meusVizinhos.length; itens++) {
        soma = soma + meusVizinhos[itens].mercado.length + meusVizinhos[itens].farmacia.length
    }
    const itens = soma
    return itens
}

const totalItens = somaItens()

function qualVeiculo(totalItens) {
    if ( totalItens <= 10 ) {
        console.log(`Total de itens: ${totalItens}. Você pode ir de bicicleta.`)
    } else if (totalItens <= 20) {
        console.log(`Total de itens: ${totalItens}. Você pode ir de moto.`)
    } else {
        console.log(`Total de itens: ${totalItens}. Você deve ir de carro.`)
    }
}

qualVeiculo(totalItens)