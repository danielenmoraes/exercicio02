/*
    Nesse desafio você irá criar uma lista de **estudantes** e,
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**,
 verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const estudantes = [
    {
        nome: "Danielen",
        nota1: 10,
        nota2: 8,
    },
    {
        nome: "Felipe",
        nota1: 10,
        nota2: 10,
    },
    {
        nome: "Ana",
        nota1: 5,
        nota2: 6,
    },

]

function mediaAlunos(estudante){
   
   
    const media = (estudante.nota1 + estudante.nota2) / 2

    if(media >=7){
         alert(`A média do(a) aluno(a) ${estudante.nome} é:
        ${(media).toFixed(2)} Parabéns, ${estudante.nome}! Você foi aprovado \n`)

    } else {
         alert(`A média do(a) aluno(a) ${estudante.nome} é:
        ${(media).toFixed(2)} Não foi dessa vez, ${estudante.nome}! Tente novamente!`)
    }

    
}

mediaAlunos(estudantes[0])
mediaAlunos(estudantes[1])
mediaAlunos(estudantes[2])


