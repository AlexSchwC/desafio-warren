function reversoNum (num) {
    // if(typeof(num) !== "number") return "Por favor insira um número";
    const reversoNumStr = num.toString().split('').reverse().join('');
    return reversoNumStr.startsWith('0') === true ? NaN : parseFloat(reversoNumStr) * Math.sign(num);
};

function mostraImpares(num) {
    contagem = 0;
    const reversiveis = [];
    for (let i = 1; i <= num; i++) {

        const reversoI = reversoNum(i);
        const somaNums = i + reversoI;

        if(somaNums % 2 === 1) {
            if(!reversiveis.includes(i) || !reversiveis.includes(reversoI)) {
                contagem++;
                reversiveis.push(i, reversoI)
                console.log(`.${contagem} > ${i} + ${reversoI} = ${somaNums}`);
            }
        };
    };
    // console.log(reversiveis)
};

mostraImpares(100000);

