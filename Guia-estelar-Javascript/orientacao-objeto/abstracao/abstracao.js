class Parafuso {
    constructor() {
        if(this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada') 
    }
    get tipo() {
        throw new Error('Método "get tipo" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() {super()}

    get tipo() {
        return 'fenda'
    }
}

class Phillips extends Parafuso {
    constructor() {super()}

    get tipo() {
        return 'phillips'
    }
}

class Allen extends Parafuso {}

//new Parafuso() Classe abstrata não pode ser instanciada
let fenda = new Fenda()
let phillips = new Phillips()
let allen = new Allen()

console.log(fenda.tipo, phillips.tipo)
console.log(allen.tipo)


