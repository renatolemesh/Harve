const notaAluno01 = 7
const notaAluno02 = 5
const notaAluno03 = 6.8

const feedback01 = document.getElementById('feedback-nota-01')
const feedback02 = document.getElementById('feedback-nota-02')
const feedback03 = document.getElementById('feedback-nota-03')

let nomeAluno01 = 'Matheus'
let nomeAluno02 = 'Alecksander'
let nomeAluno03 = 'Valmir'


if (notaAluno01 >= 7) {
    feedback01.textContent = `aluno ${nomeAluno01} tirou a nota ${notaAluno01}. Aluno: Aprovado`
} else {
    feedback01.textContent = `aluno ${nomeAluno01} tirou a nota ${notaAluno01}. Aluno: Aprovado`
}

if (notaAluno02 >= 7) {
    feedback02.textContent = `aluno ${nomeAluno02} tirou a nota ${notaAluno02}. Aluno: Aprovado`
} else {
    feedback02.textContent = `aluno ${nomeAluno02} tirou a nota ${notaAluno02}. Aluno: Aprovado`
}

if (notaAluno03 >= 7) {
    feedback03.textContent = `aluno ${nomeAluno03} tirou a nota ${notaAluno03}. Aluno: Aprovado`
} else {
    feedback03.textContent = `aluno ${nomeAluno03} tirou a nota ${notaAluno03}. Aluno: Reprovado`
}

function mostrarResultado() {
    let x = document.getElementById('mostrar')
    if (x.style.display == '') {
        x.style.display = 'none'
    } else {
        x.style.display = ''
    }
    
}

let notateste = document.getElementById('nota01')   
console.log(notateste)
