const rls = require('readline-sync');

async function inicioAula() {
    const quantidadeAlunos = rls.question('Quantos alunos vieram para a aula hoje? \n');
    let maxDeAtrasos = rls.question('Com quantos atrasos a aula sera cancelada? \n');
    while (maxDeAtrasos < 1 && maxDeAtrasos > quantidadeAlunos) {
        maxDeAtrasos = rls.question('Máximo de atrasos não pode ser 0 ou maior que a quantidade de alunos presentes')
    }
    let atrasados = 0;
    let noHorario = 0;
    
    console.log('Informe a hora em que o aluno chegou na forma de minutos atrasado (+mins) e adiantado (-mins)');
    console.log('Ex: +5 para 5 minutos atrasado e -3 para 3 minutos adiantado');
    for (let i = 1; i <= quantidadeAlunos; i++) {
        let input = rls.question(`Informe o horario de chegada do Aluno ${i}: `);
        input <= 0 ? noHorario++ : atrasados++
    };
    atrasados >= maxDeAtrasos ? console.log(`Aula cancelada pois ${atrasados} alunos chegaram atrasados`) : console.log('Aula normal!')
};

inicioAula();
