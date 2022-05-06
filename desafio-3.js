const n = 10
const inputArr = [2, 3, 4]
const arrTeste = [9, 7, 6, 5, 3, 1]
const arrTeste2 = [2, 5]

function somasDecrescentes (n, inputArr, somasPossiveis) {
    let arr = []
    let alvo = n
    let j = inputArr.length -1
    let i = inputArr.length -1
    for (i; i >= 0;) {
        console.log(`i:${i} - j:${j} - alvo:${alvo}`)
        if (inputArr[i] > alvo) {
            while (inputArr[j] > alvo) {
                j--
                if (j === -1) {
                    arr = []
                    i--
                    j = i
                    alvo = n
                }
            }
        }
        if (inputArr[i] <= alvo || inputArr[j] <= alvo) {
            arr.push(inputArr[j])
            alvo -= inputArr[j]
        }
        if (alvo === 0) {
            somasPossiveis.push(arr)
            arr = []
            i--
            j = i
            alvo = n
        }
    }
}

function somasAproximadas (n, inputArr, somasPossiveis) {
    
}

function encontraSomas(n, inputArr) {
    const arrOrdenado = inputArr.sort((a, b) => a - b);

    let somasPossiveis = []
    let menoresSomas = []

    somasDecrescentes(n, arrOrdenado, somasPossiveis)

    console.log(somasPossiveis)
}

encontraSomas(n, arrTeste)

/* 
ir testanto os numeros do array em sentido crescente eliminando o primeiro elemento a cada teste, e depois uma vez em ordem decrescente
sempre verificando o resto % no processo
[2, 3, 4] => [3, 4] => [4]
[4, 3, 2]
*/
