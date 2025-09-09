
   const botaoMostrapalavras = document.querySelector( "#botao-palavrachave");

botaoMostrapalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave(){ 
    const texto = document.querySelector("#entrada-de-texto").value;
    
    const campoResultado = document.querySelector("#resultado-palavrachave");

    const palavras = texto.split("");
    
     campoResultado. textContent = palavras;  

}