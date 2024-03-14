function verificarIdade() {
    const inputIdade = document.getElementById('idade')
    const valorIdade = inputIdade.value
    console.log(valorIdade)

    if (isNaN(valorIdade) || valorIdade == null || valorIdade == undefined) {
        alert('Idade informada incorretamente')
        return
    }

    const resultadoIdade = document.getElementById('resultadoIdade')
    if (valorIdade < 18) {
        resultadoIdade.textContent = "Você é menor de idade!"
        resultadoIdade.style.color ="red"
        resultadoIdade.style.fontSize ="2rem"

    } else {
        resultadoIdade.textContent = "Você é maior de idade!"
        resultadoIdade.style.color ="green"
        resultadoIdade.style.fontSize ="2rem"
    }

}
