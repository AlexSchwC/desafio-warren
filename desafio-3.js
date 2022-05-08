const n = 10
const inputArr = [2, 3, 4]
const arrTeste = [9, 7, 6, 5, 3, 1]
const arrTeste2 = [2, 5]
const arrTeste3 = [ 3, 7 ]

function somasDecrescentes (n, inputArr, somasPossiveis) {
    let arr = []
    let alvo = n
    let j = inputArr.length -1
    let i = inputArr.length -1
    for (i; i >= 0;) {
        // console.log(`i:${i} - j:${j} - alvo:${alvo}`)
        if (inputArr[i] > alvo) {
            while (inputArr[j] > alvo) {
                j--
                if (alvo - inputArr[j] < 0) {

                }
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
    let arr = []
    let alvo = n
    let j = inputArr.length -1
    let i = inputArr.length -1

    for (i; i >= 0;) {
        if (inputArr[i] > alvo) {
            console.log(alvo)
            i--
        }

        if (inputArr[i] <= alvo || inputArr[j] <= alvo) {
            arr.push(inputArr[j])
            alvo -= inputArr[j]
        }
    }
}

function encontraSomas(n, inputArr) {
    const arrOrdenado = inputArr.sort((a, b) => a - b);

    let somasPossiveis = []

    somasDecrescentes(n, arrOrdenado, somasPossiveis)
    if (somasPossiveis.length === 0) somasAproximadas(n, arrOrdenado, somasPossiveis)

    let menorLength = somasPossiveis.map(arr => arr.length).reduce((acc, atual) => atual < acc ? atual : acc)

    let menoresSomas = somasPossiveis.filter((arr) => {
        if (arr.length === menorLength) return arr
    })
    
    console.log(menoresSomas)
}

encontraSomas(n, arrTeste)

/* 
ir testanto os numeros do array em sentido crescente eliminando o primeiro elemento a cada teste, e depois uma vez em ordem decrescente
sempre verificando o resto % no processo
[2, 3, 4] => [3, 4] => [4]
[4, 3, 2]
*/
