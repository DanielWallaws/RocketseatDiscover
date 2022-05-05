/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
    Agora crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo
*/

// Sistemas de gasto familiar

    

let cashFlow = {
    "revenue": [],
    "expenditure": []
}

function sum(array) {
    let total =0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateRevenue = sum(cashFlow.revenue)
    const calculateExpenditure =sum(cashFlow.expenditure)
    let balancefinal = calculateRevenue-calculateExpenditure
    
    if(balancefinal >=0) {
        console.log(`Seu saldo é positivo. Você possui R$ ${balancefinal.toFixed[2]}`)
    }
}

function addRevenue(value) {
    cashFlow.revenue.push(value)
}

function removeRevenue(indice, theamount, item) {
    cashFlow.revenue.splice(indice, theamount, item)
}

function addExpenditure(value) {
    cashFlow.expenditure.push(value)
}

function removeExpenditure (indice, theamount, item) {
    cashFlow.expenditure.slice(indice, theamount, item)
}




// function removeRevenue () {
//     cashFlow.revenue.splice()
// }

// function calculefamilyBalance() {
    //}


// console.log(calculefamilyBalance(50, 30));