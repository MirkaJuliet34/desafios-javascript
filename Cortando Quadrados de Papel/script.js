/*Maria tem um pedaço de papel que ela quer cortar em pedaços de acordo com as seguintes regras:

Ela só pode cortar um pedaço de papel por vez, o que significa que não pode dobrar o papel ou empilhar pedaços já cortados um sobre o outro.
Cada corte é uma linha reta de um lado do papel para o outro lado do papel. Por exemplo, o diagrama abaixo ilustra as três maneiras possíveis de cortar um pedaço de papel:

Dado e , encontre e imprima o número mínimo de cortes que Maria deve fazer para cortar o papel em quadrados que são de tamanho unitário.

Formato de Entrada

Uma única linha com dois inteiros separados por espaço que denotam os respectivos valores de e .

Restrições

Formato de Saída

Imprima um inteiro longo denotando o número mínimo de cortes necessários para cortar todo o papel em quadrados.

Exemplo de Entrada

3 1
Exemplo de Saída

2
Explicação

Maria primeiro corta o pedaço de papel em um pedaço e um pedaço. Ela então corta o pedaço em dois pedaços:

Como levou dois cortes para obter pedaços de tamanho , imprimimos  como nossa resposta. */



// Function to calculate minimum cuts
function minCuts(n, m) {
    return n * m - 1;
}

// Read input as two integers separated by space
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [n, m] = input.split(" ").map(Number);

// Print the result


