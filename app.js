let listaNumeroSort= [];
let numMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
 
    function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.2});
    }
    function exibirMensagemInicial(){
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    }
    exibirMensagemInicial();


    function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertooou !!");
    let palavraTentativa = tentativas > 1 ? "tentativas " : "tentativa";
    let mensagemTentativas = `Voçê descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
    exibirTextoNaTela("P ", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
    if (chute > numeroSecreto) {
        exibirTextoNaTela("p"," O numero secreto é menor");
    }else{
        exibirTextoNaTela("p", "O numero secreto é maior ");
    }
    tentativas++;
    limparCampo();
    }
}

    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numMax + 1);
        let quantidadeDeElement = listaNumeroSort.length;

        if(quantidadeDeElement == numMax){
            listaNumeroSort = [];
        }


        if(listaNumeroSort.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
        }else{
            listaNumeroSort.push(numeroEscolhido);
            return numeroEscolhido;
        }
    
    }

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);

}









