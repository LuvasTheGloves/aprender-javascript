// aqui vai o código JavaScript //

// exibe uma janela //
alert("olá galera!")

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