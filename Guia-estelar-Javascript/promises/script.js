function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function() {
            resolve('40 na sombra');
        }, 2000);
    })
}

//PROMISE: quando fazemos uma requisição, então ficamos com uma promessa de resultado. Esse é um código assincrono
//Sabe-se que PROMISSES é um modelo de requisição HTTP, não somente do JavaScript

console.log("codigo antes")

let temp = pegarTemperatura();

console.log("codigo durante")
temp.then(function(resultado) {
    console.log("TEMPERATURA: "+resultado);
});

temp.catch(function(error){
    console.log("Eita, deu errado!");
});
console.log('código depois!')