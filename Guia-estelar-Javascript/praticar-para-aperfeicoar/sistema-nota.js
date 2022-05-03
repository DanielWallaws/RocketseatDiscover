/*
    Crie um algoritmo que transforme
    as notas do sistema numérico para 
    sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 e 89 - B
    * entre 70 e 79 - C
    * entre 60 e 69 - D
    * menor que 60 - F
    * 
*/

let score = null;

function verifyScore(score) {
    let scoreA = score >= 90 && score <= 99;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score >= 50 && score <= 59;
    let scoreFinal;

    if(scoreA) {
        scoreFinal = "Nota A"
    } else if (scoreB) {
        scoreFinal= "Nota B"
    } else if (scoreC) {
        scoreFinal= "Nota C"
    } else if (scoreD) {
        scoreFinal="Nota D"
    } else if (scoreF) {
        scoreFinal="Nota F"
    } else {
        scoreFinal="Nota inválida"
    }
    return scoreFinal 
}

console.log(verifyScore(50));
console.log(verifyScore(101));
console.log(verifyScore(-1));
console.log(verifyScore(0.5));
console.log(verifyScore(89));
console.log(verifyScore(99));
console.log(verifyScore(100));
console.log(verifyScore(78));
console.log(verifyScore(83));

