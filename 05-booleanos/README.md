<h1 align="center">
    <img alt="Launchbase" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-launchbase.png" width="250px" />
</h1>

## :trophy: Desafio 4: Cálculo de distância e combustível numa viagem

Esse programa calcula a distância percorrida e o quanto foi gasto com combustível em uma viagem.\
Ele tem como base o 
[desafio 1-4](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-4-aplicacao-operacoes-bancarias.md) proposto pela Rocketseat.

Desafio original:
> Crie um programa para realizar operações bancárias na conta de um usuário.
> As transações devem iniciar como um array vazio ```[]``` e o saldo em ```0```.

Meu desafio:
> Criar um programa para calcular o valor gasto com combustível numa viagem.\
Criar funções para calcular a distância percorrida, o custo de combustível por quilômetro e o maior abastecimento com etanol e com gasolina.

### Tecnologias utilizadas
* JavaScript

### Conceitos
* Booleanos
* Funções e métodos
* Estruturas de repetição 
* Escopos

### Como esse programa funciona

No objeto ```abastecimentos```, os arrays ```combustivel``` e ```km``` estão vazios. Para inserir dados nesses arrays vamos utilizar o método ```push``` nas funções ```criaAbastecimento``` e ```adicionaKm```.

Agora vamos usar a função ```acharMaiorAbastecimento``` para achar o maior abastecimento feito nessa viagem. Essa função vai usar o parâmetro ```tipo``` para achar o maior abastecimento feito com ```etanol``` e com ```gasolina```.

Por último, a função ```somarValorAbastecimentos``` vai somar o valor de todos os abastecimentos.

### Como testar esse programa

1. Copie o código do arquivo [desafio-1-4.js](https://github.com/dhiego-gomes/rocketseat-launchbase-desafios/blob/master/05-booleanos/desafio-1-4.js).
2. Abra uma nova aba no seu navegador e aperte F12 para abrir o console.
3. Clique na aba Console, cole o código copiado e aperte Enter.
4. Você verá o total de quilômetros da viagem, o custo total de combustível, o custo por quilômetro e o registro dos maiores abastecimentos.
