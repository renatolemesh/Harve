function formatarData(data, separador) {
    const dataArray = data.split(separador)
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto','setembro','outubro','novembro','dezembro'];
    return `${dataArray[0]} de ${meses[Number(dataArray[1]) - 1]} de ${dataArray[2]}`
}

function calcularDiferencaDias(data) {
    const Data = 
}