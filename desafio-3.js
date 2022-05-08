const rls = require('readline-sync')

function somasDecrescentes (n, inputArr, somasPossiveis) {
    let arr = []
    let alvo = n
    let j = inputArr.length -1
    let i = inputArr.length -1
    for (i; i >= 0;) {
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

function encontraSomas(n, inputArr) {
    const arrOrdenado = inputArr.sort((a, b) => a - b);

    let somasPossiveis = []

    somasDecrescentes(n, arrOrdenado, somasPossiveis)

    let positivoAproximado = n
    let negativoAproximado = n
    let contaVariacao = 0
    while (somasPossiveis.length === 0) {
        positivoAproximado++
        negativoAproximado--
        contaVariacao++
        somasDecrescentes(positivoAproximado, arrOrdenado, somasPossiveis)
        somasDecrescentes(negativoAproximado, arrOrdenado, somasPossiveis)
    }

    let menorLength = somasPossiveis.map(arr => arr.length).reduce((acc, atual) => atual < acc ? atual : acc)

    let menoresSomas = somasPossiveis.filter((arr) => {
        if (arr.length === menorLength) return arr
    })
    
    if (positivoAproximado !== n) {
        console.log(`Não foi encontrada uma soma que satisfaça o número alvo ${n}`)
        console.log(`As somas mais próximas foram encontradas dentro de +/- ${contaVariacao} a partir de ${n}:`)
        console.log(menoresSomas)
    } else {
        console.log(`As menores somas possiveis dado o número alvo ${n} são: `)
        console.log(menoresSomas)
    }
}

const n = rls.question('Por favor insira aqui o numero alvo: ')
const strInput = rls.question('Agora insira os numeros que serao usados para tentar somar ate o numero alvo anterior. \nSeparados apenas por virgula: \n')
const arrInput = strInput.length <= 1 ? strInput : strInput.trim().split(',')

encontraSomas(n, arrInput)
