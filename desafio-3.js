const n = 10
const inputArr = [2, 3, 4]
const arrTeste = [9, 7, 6, 5, 3, 1]

function encontraSoma(n, inputArr) {
    const arrOrdenado = inputArr.sort((a, b) => a - b);
    let arrIterado = arrOrdenado
    let arrIterado2 = arrOrdenado

    let somasPossiveis = []
    let menoresSomas = []

    let nAlvo = n
    let arr = []
    for (let i = arrOrdenado.length - 1; i >= 0;) {
        // percorrer o array fazendo somas com o maior valor do array
        if (nAlvo >= arrIterado[i]) {
            nAlvo -= arrIterado[i]
            arr.push(arrIterado[i])
        }

        if (nAlvo < arrIterado[i]) {
            i--
            arrIterado.pop()
        }

        if (nAlvo === 0) {    
            arrIterado.pop()
            somasPossiveis.push(arr)
            nAlvo = n
            arr = []
        }
    }
    console.log("> ", arrIterado)
    
    // arr = []

    // for (let i = 0; i < arrOrdenado.length;) {
    //     // percorrer o array fazendo somas com o menor valor do array
    //     if (nAlvo >= arrIterado2[i]) {
    //         nAlvo -= arrIterado2[i]
    //         arr.push(arrIterado2[i])
    //     }

    //     if (nAlvo < arrIterado2[i]) {
    //         i++
    //     }

    //     if (nAlvo === 0 || nextLoop === true) {    
    //         arrIterado2 = arrIterado2.splice(0, 1)
    //         somasPossiveis.push(arr)
    //         arr = []
    //         nAlvo = n
    //     }
    // }
    console.log(somasPossiveis)
}

// encontraSoma(n, inputArr)
encontraSoma(n, inputArr)

/* 
ir testanto os numeros do array em sentido crescente eliminando o primeiro elemento a cada teste, e depois uma vez em ordem decrescente
sempre verificando o resto % no processo
[2, 3, 4] => [3, 4] => [4]
[4, 3, 2]
*/
