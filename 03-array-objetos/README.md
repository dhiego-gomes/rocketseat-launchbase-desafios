<h1 align="center">
    <img alt="Launchbase" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-launchbase.png" width="250px" />
</h1>

## :trophy: Desafio 3: Listar itens de compra

Esse programa faz uma lista das coisas que os vizinhos idosos pediram pra comprar e calcula se é melhor ir de bicicleta, moto ou carro.\
Ele tem como base o 
[desafio 1-2](https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md) proposto pela Rocketseat.

Desafio original:
> Crie um programa com um objeto para armazenar dados de um programador como ```nome```, ```idade``` e ```tecnologias``` que trabalha.

Meu desafio:
> Criar um programa com um array para listar ```nome``` e ```itens de compra```.\
Criar uma função para somar a quantidade de itens e mostrar o resultado.\
Criar uma função que calcula qual o melhor meio de transporte para comprar esses itens.

### Tecnologias utilizadas
* JavaScript

### Conceitos
* Array 
* Objetos

### Como esse programa funciona

Percorrendo o array ```meusVizinhos``` encontramos as *propriedades* dos objetos ```mercado``` e ```farmacia```. 
Podemos dizer que essas *propriedades* são os **itens que vamos comprar**.

O próximo passo é calcular se é melhor ir de bicicleta, moto ou carro. Esse cálculo leva em conta a quantidade total de itens.\
Se o ```totalItens <= 10``` você pode ir de bicicleta, por ser mais econômico.
Caso o ```totalItens <= 20``` talvez seja melhor ir de moto, que é mais versátil.
Mas se o ```totalItens > 20```, você deve ir de carro, pela quantidade de itens.

### Como testar esse programa

1. Copie o código do arquivo [desafio-1-2b.js](https://github.com/dhiego-gomes/rocketseat-launchbase-desafios/blob/master/02-condicionais/desafio-1-1b.js).
2. Abra uma nova aba no seu navegador e aperte F12 para abrir o console.
3. Clique na aba Console, cole o código copiado e aperte Enter.
4. Você verá o nome do vizinho, os itens que ele precisa de cada estabelecimento e qual o melhor meio de transporte para fazer essas compras.
