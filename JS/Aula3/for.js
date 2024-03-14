const numerosAleatorios = [
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
    Math.random()*100,
];

let resultadoSoma = 0

/*for (let i = 0; i < numerosAleatorios.length; i++) {
    resultadoSoma  = resultadoSoma + numerosAleatorios[i];
} */

for (let numero of numerosAleatorios) {
    resultadoSoma = resultadoSoma + numero;
}
console.log(resultadoSoma);
