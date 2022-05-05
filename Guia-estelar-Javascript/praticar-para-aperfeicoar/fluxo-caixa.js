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

function addRevenue (value) {
    cashFlow.revenue.push(value)
}

function removeRevenue (number, ) {
    cashFlow.revenue.splice()
}

function addExpenditure (value) {
    cashFlow.expenditure.push(value)
}

function removeExpenditure (value) {
    cashFlow.expenditure.slice(value)
}



// function removeRevenue () {
//     cashFlow.revenue.splice()
// }

// function calculefamilyBalance() {
    //}


// console.log(calculefamilyBalance(50, 30));