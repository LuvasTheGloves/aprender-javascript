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

function trocarClasse() {
    var fraseatual = document.getElementById("frase");
    fraseatual.className = "h1_2";
}

function trocarTexto() {
    var elemento = document.getElementById("frase")
    var elementoNovo = document.getElementById("novaFrase").value
    elemento.innerHTML = elementoNovo
}

function somar() {
    let campoN1 = document.getElementById("n1")
    let valorN1 = parseInt(campoN1.value)

    let campoN2 = document.getElementById("n2")
    let valorN2 = parseInt(campoN2.value)

    let resultadoDaSoma = valorN1 + valorN2
    
    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaSoma
}

function subtrair() {
    let campoN1 = document.getElementById("n1")
    let valorN1 = parseInt(campoN1.value)

    let campoN2 = document.getElementById("n2")
    let valorN2 = parseInt(campoN2.value)

    let resultadoDaSub = valorN1 - valorN2
    
    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaSub
}

function multiplicar() {
    let campoN1 = document.getElementById("n1")
    let valorN1 = parseInt(campoN1.value)

    let campoN2 = document.getElementById("n2")
    let valorN2 = parseInt(campoN2.value)

    let resultadoDaMulti = valorN1 * valorN2
    
    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaMulti
}

function dividir() {
    let campoN1 = document.getElementById("n1")
    let valorN1 = parseInt(campoN1.value)

    let campoN2 = document.getElementById("n2")
    let valorN2 = parseInt(campoN2.value)

    let resultadoDaDivi = valorN1 / valorN2
    
    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaDivi
}


