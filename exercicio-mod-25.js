const alunos = [{ nome: 'Marcelo', nota: 9.5 }, { nome: 'Lucas', nota: 5.0 }, { nome: 'Letícia', nota: 8.0 }, { nome: 'Pedro', nota: 4.0 }, { nome: 'Carla', nota: 5.9 }, { nome: 'Luiz', nota: 6.0 }]

const alunosAprovados = alunos.filter((aluno) => {
    return aluno.nota >= 6.0

})

console.log(alunosAprovados);
