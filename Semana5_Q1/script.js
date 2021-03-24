/* 
Achei esse código fuçando umas coisas, embora ele esteja quase pronto, eu realmente não sei como trabalhar com ele. Então saí tentando do meu jeito e recebendo ajuda de colegas, eu fiz um que usava input no html, mas fugia muito do que o senhor queria, então fiz um com menos distância, usando o "input do JS".

function createList(number, text = 'Text') {
  let result = '<ul>\n';
  for (let flag = 1; flag <= number; flag++) {
    result += `  <li>${text} ${flag}</li>\n`;
  }
  result += '</ul>';

  return result;
}
export { createList };      

*/
let tamL = window.prompt("Tamanho da Lista:");
let item = window.prompt("Item da Lista:");
let cont = 0;
    function createList(){
    cont++
    let criarElemento = document.createElement("LI");
    let Itlista = document.createTextNode(`${item} ${cont}`);
    criarElemento.appendChild(Itlista);
    document.getElementById("lista").appendChild(criarElemento);
}
for (let i = 0; i < tamL; i++){
    createList();
}