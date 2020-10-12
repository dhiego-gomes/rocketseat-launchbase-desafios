<h1 align="center">
    <img alt="Launchbase" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-launchbase.png" width="250px" />
</h1>

## :trophy: Desafio 3: Cálculo de salário

Esse programa calcula o salário dos colaboradores de uma empresa.\
Ele tem como base o 
[desafio 1-3](https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md#soma-de-despesas-e-receitas) proposto pela Rocketseat.

Desafio original:
> Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo  ``` receitas - despesas```.

Meu desafio:
> Criar um programa para calcular o salário de colaboradores que recebem valores diferentes por hora de trabalho.\
Criar uma função para calcular o valor das horas extras.

### Tecnologias utilizadas
* JavaScript

### Conceitos
* Funções e métodos
* Estruturas de repetição 
* Escopos

### Como esse programa funciona

Primeiro, vamos usar a função ```sumHours``` para somar as horas de cada colaborador. *As horas estão registradas por semana.*

Depois, a função ```calculateSalary``` vai calcular o valor de cada salário. Esse cálculo é bem simples: ```horas trabalhadas x valor da hora```. Mas, precisamos levar em conta que cada colaborador tem um cargo diferente. Assim, o valor por hora também é diferente. Por isso, a função retorna ```totalHours * totalValue```, usando as propriedades correspondentes de cada colaborador.

Agora vamos calcular as horas extras com a função ```calculateOvertime```. *Nesse programa, simulamos que valor da hora extra seja de 50%.*\
Essa função vai funcionar de uma forma bem parecida da função ```calculateSalary```.
Mas ela tem um ```return``` diferente. Primeiro ela vai multiplicar as horas extras pelo valor de horas.
Depois, vai multiplicar esse valor por ```1.5```. Então, o ```return``` dessa função vai ser ```(overtime * totalValue) * 1.5```.

### Como testar esse programa

1. Copie o código do arquivo [desafio-1-3.js](https://github.com/dhiego-gomes/rocketseat-launchbase-desafios/blob/master/04-funcoes-metodos/desafio-1-3.js).
2. Abra uma nova aba no seu navegador e aperte F12 para abrir o console.
3. Clique na aba Console, cole o código copiado e aperte Enter.
4. Você verá o nome do colaborador, seu cargo e os resultados dos cálculos citados acima.
