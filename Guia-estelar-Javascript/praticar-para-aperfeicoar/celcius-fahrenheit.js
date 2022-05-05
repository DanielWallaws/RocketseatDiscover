/*
    Crie uma função que receba 
    uma string em celcius ou 
    fahrenheit e faça a transformação de uma unidade para outra

    C = (F-32) * 5/9
    F =  C* 9/5 +32
*/

// Celcius em Fahrenheint

function temperatureConverter(type="", value="") {
    
    const setFahrenheint = `Você digitou uma temperatura em Fahrenheint.`
    const setCelcius = `Você digitou uma temperatura em Celcius.`
    
    
    if(type == "F" || type == "f") {
        let FtoC = (Number(value)-32)*5/9;
        
        console.log(`${setFahrenheint} Essa temperatura convertida para Celsius fica ${FtoC.toFixed(0)} graus Celcius.`)

    } else if(type === "C" || type === "c") {
        let CtoF = (Number(value)*9/5) + 32;

        console.log(`${setCelcius} Essa temperatura convertida para Fahrenheint  fica ${CtoF.toFixed(0)} graus Fahrenheint.`)

    } else {
        console.log("Tipo da temperatura ou valor da temperatura é invalido.")
    }
}