<h1 align="center">
    <img alt="Launchbase" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-launchbase.png" width="250px" />
</h1>

## :trophy: Desafio 1: Cálculo de IMC

Esse programa calcula o IMC e o nível de obesidade de uma pessoa. IMC é a sigla para Índice de Massa Corpórea, de acordo com os padrões estabelecidos pela Organização Mundial da Saúde. Saiba  mais sobre IMC [clicando aqui](https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal).

### Tecnologias utilizadas
* JavaScript

### Conceitos
* Variáveis
* Operadores

### Como esse programa funciona

O IMC é calculado da seguinte maneira: a altura da pessoa é elevada ao quadrado e então dividida pelo seu peso.
Por exemplo, se ```Arthur``` tem ```1.75```m de altura e pesa ```76```kg, então calculamos ```76 / (1.75 * 1.75)```. O resultado é um IMC de ```24.8```.

O cálculo obedece aos seguintes parâmetros:

| IMC	                | CLASSIFICAÇÃO	OBESIDADE | (GRAU) |
|---------------------|-------------------------|--------|
| MENOR QUE 18,5	    | MAGREZA	                | 0
| ENTRE 18,5 E 24,9	  | NORMAL	                | 0
| ENTRE 25,0 E 29,9	  | OBESIDADE	              | I
| ENTRE 30,0 E 39,9	  | OBESIDADE	SEVERA        | II
| MAIOR QUE 40,0	    | OBESIDADE MÓRBIDA   | III

### Como testar esse programa

1. Copie o código do arquivo [desafio-1-1a.js](https://github.com/dhiego-gomes/rocketseat-launchbase-desafios/blob/master/01-variaveis-operadores/desafio-1-1a.js).
2. Abra uma nova aba no seu navegador e aperte F12 para abrir o console.
3. Clique na aba Console, cole o código copiado e aperte Enter.
4. Você verá o resultado do IMC e o grau de obesidade de acordo com os dados informados.
