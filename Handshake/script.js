/*Na reunião anual do Conselho de Diretores da Acme Inc. Se todos os participantes apertarem as mãos exatamente uma vez com cada um dos outros participantes, quantos apertos de mão haverá?

Exemplo

Há  participantes, ,  e .  aperta as mãos com  e , e  aperta as mãos com . Agora todos já se cumprimentaram após  apertos de mão.

Descrição da Função

Complete a função handshakes no editor abaixo.

handshakes tem o seguinte parâmetro:

int n: o número de participantes
Retorna

int: o número de apertos de mão
Formato de Entrada
A primeira linha contém o número de casos de teste .
Cada uma das linhas seguintes contém um inteiro, .

Restrições



Exemplo de Entrada

2
1
2
Exemplo de Saída

0
1
Explicação

Caso 1: O membro solitário do conselho não aperta mãos, portanto 0.
Caso 2: Existem 2 membros do conselho, então 1 aperto de mão ocorre.*/


function handshakes(n) {
    return n * (n - 1) / 2;
}

function main() {
    const testCases = [1, 2]; // Exemplo de entrada
    const results = [];
    for (let i = 0; i < testCases.length; i++) {
        results.push(handshakes(testCases[i]));
    }
    console.log(results.join("\n"));
}

main();
