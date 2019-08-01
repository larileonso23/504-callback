function abrrirAlert (nome) {
    alert(nome);
}


function receberNome(callbackNome){
    let nome = "Larissa"
    callbackNome(nome);

}
receberNome(abrrirAlert);

//let lista = document.querySelector("ul");