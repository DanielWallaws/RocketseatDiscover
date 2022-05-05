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
    "receita": [],
    "despesa": []
  }
  
  function add_receita(value) {
    cashFlow.receita.push(value)
    console.log(`add receita: ${value}`)
  }
  
  function add_despesa(value) {
    cashFlow.despesa.push(value)
    console.log(`add despesa: ${value}`)
  }
  function remove_despesa(index, count) {
    cashFlow.despesa.splice(index, count)
    console.log(`remove despesa: ${cashFlow.despesa.splice(index, count)}`)
  
  }
  
  const consulta = {
    receita: {
      valor: () => cashFlow.receita.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual
      }, 0),
      total: () => { console.log(`Receita total: ${consulta.receita.valor()} `) }
    },
  
    despesa: {
      valor: () => cashFlow.despesa.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual
      }, 0),
      total: () => { console.log(`Despesa total: ${consulta.despesa.valor()} `) }
    },
  
    saldo: {
      saldo: () => consulta.receita.valor() - consulta.despesa.valor(),
      mensagem: () => {
        if (consulta.saldo.saldo() >= 0) {
          console.log(`Família com saldo positivo: ${consulta.saldo.saldo().toFixed(2)}`)
        } else {
          console.log(`Família com saldo negativo: ${consulta.saldo.saldo().toFixed(2)}`)
        }
      }
    }
  }