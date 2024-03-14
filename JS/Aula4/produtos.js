function salvarProduto(event) {
    event.preventDefault()
    const produto = document.getElementById("produto").value
    const categoria = document.getElementById("categoria").value
    const preco = document.getElementById("preci").value

    const dadosProduto = document.getElementById("dadosProduto")

    dadosProduto.textContent = `
    Produto ${produto}, cadastrado com sucesso. Categoria ${categoria} e preço ${preco}`

}