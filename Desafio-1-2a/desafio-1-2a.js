
// CONSTRUÇÃO E IMPRESSÃO DE OBJETOS

// Esse programa armazenza dados e imprime em tela.

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`Endereço da ${empresa.nome}: ${empresa.endereco.rua}, ${empresa.endereco.numero}.`)