
// VETORES E OBJETOS

// Esse programa armazenza dados de um programador e imprime em tela.

const devs = [
    {
        nome: 'Dhiego',
        idade: 33,
        techs: [
            {   tech: 'JS', espec: 'Desktop'    },
            {   tech: 'C++', espec: 'Web/Mobile'    },
            {   tech: 'Python', espec: 'Data Science'    } 
        ]
    },
    {
        nome: 'Marcos',
        idade: 26,
        techs: [
            {   tech: 'C++', espec: 'Desktop'    },
            {   tech: 'JS', espec: 'Mobile'    },
            {   tech: 'Python', espec: 'Web'    } 
        ]
    }
]

console.log(`O user ${devs[0].nome} tem ${devs[0].idade} e usa a tecnologia ${devs[0].techs[0].tech} com especialidade em ${devs[0].techs[0].espec}.`)