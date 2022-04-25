/*
    Existem várias maneiras de manipular arrays, como: o método push(), 
    que adiciona um elemento no final do array, o método unshift(), 
    que adiciona um elemento no começo do array, o método pop(), 
    que retira um elemento do final do array, o método shift(), 
    que retira um elemento do começo do array, o método slice(), 
    que recebe como argumentos a posição de início e a posição do 
    fim da parte que você quer selecionar, e retorna os valores 
    destas posições, o método splice(), que recebe como argumentos 
    a posição de início e a quantidade de elementos que você quer 
    remover e o método indexOff(), que encontra o index do valor 
    que recebe como argumento em um array.
*/


// MANIPULANDO ARRAYS

let techs =  ["html", "css", "js"]
// Adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais intens em qualquer posição do array
// encontrar a posição de um elemento

console.log(techs)