
const botaoMostrapalavras = document.querySelector("#botao-palavrachave");

botaoMostrapalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
   const texto = document.querySelector("#entrada-de-texto").value;
   campoResultado = document.querySelector("#resultado-palavrachave");
   const palavrasChave = processaTexto(texto);

   campoResultado.textContent = palavras;
}
function processaTexto(texto) {
     let palavras = texto.split(/\P{L}+/u);
     const frequencia = contaFrequencias (palavras);
     let ordenadas = Object.keys(frequencia).sort(ordenaPalavra);

     function ordenaPalavra(p1,p2){
      return frequencias [p2] - frequencias[p1];
     }

     console.log(ordenadas);
     return ordenadas.slice(0, 10);
   }
   function contaFrequencias(palavras) {
      let frequencias = {;
         for (let i of palavras) {
            frequencias[i] = 0;
            for (let j of palavras) {
               if (i== j) {
                  frequencias[i]++;
            }
         }
      }
   return palavras;

}
     