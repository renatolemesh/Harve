function calcularRetornoInvestimento() {
    // Fórmula M = capitalInicial * (1 + taxaJurosEmPercentual) ** periodo

    let capitalInicial = document.getElementById("capital-inicial").value;
    let taxaJuros = document.getElementById("taxa-juros").value;
    let taxaJurosDecimal = taxaJuros/100
    let meses = document.getElementById("meses").value;
    let formula = capitalInicial * (1 + taxaJurosDecimal)**meses
    let resultado = formula
    let lucro = resultado - capitalInicial
        console.log(resultado)
        document.getElementById('resultado').textContent = `Investindo um total de R$${capitalInicial} terá um montante de R$${resultado.toFixed(2)} em ${meses} meses e o lucro será de R$${lucro.toFixed(2)}`

}