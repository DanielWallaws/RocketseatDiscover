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

function addRevenue(value) {
    cashFlow.revenue.push(value)
}

function removeRevenue(index, quantity_items_remove) {
    cashFlow.revenue.splice(index, quantity_items_remove)
}

function addExpenditure(value) {
    cashFlow.expenditure.push(value)
}

function removeExpenditure (index, quantity_items_remove) {
    cashFlow.expenditure.slice(index, quantity_items_remove)
}

function calculateBalance() {
    const calculateRevenue = sum(cashFlow.revenue)
    const calculateExpenditure = sum(cashFlow.expenditure)
    const balancefinal = calculateRevenue-calculateExpenditure
    
    if(balancefinal >0) {
        console.log(`Seu saldo é positivo. Você possui R$ ${balancefinal.toFixed(2)}`)
    } else if (balancefinal <0) {
        console.log(`Seu saldo é negativo. Você possui R$ ${balancefinal.toFixed(2)}`)
    } else{
        console.log(`Seu saldo é de R$ ${balancefinal.toFixed(2)}`)
    }
}