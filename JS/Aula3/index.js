

function CalcularImc() {
        let altura = document.getElementById("altura").value;
        altura = Number(altura)
        altura = altura / 100
        let peso = document.getElementById("peso").value;
        peso = Number(peso)
        
        indice1 = (altura * altura)
        resultado = (peso / indice1)
        document.getElementById('resultado').textContent = `Seu indice de massa corporal é igual a ${Math.round(resultado)} ou ${resultado.toFixed(2)}  `
}
