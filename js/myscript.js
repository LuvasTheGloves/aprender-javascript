function mudarFrase() {
    var elemento = document.getElementById("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    //altera o fundo da página
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/sans.png\' />"
}

function trocarClasse() {
    var fraseatual = document.getElementById("frase");
    fraseatual.className = "h1_2";
}

function trocarTexto() {
    var elemento = document.getElementById("frase")
    var elementoNovo = document.getElementById("novaFrase").value
    elemento.innerHTML = elementoNovo
}