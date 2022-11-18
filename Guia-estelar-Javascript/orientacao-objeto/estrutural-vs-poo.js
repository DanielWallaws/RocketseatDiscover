//Orientação a Objeto
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        //Essa hash é um encapsulamento para o que é feito na função
        //Dessa forma não se tem acesso aos detalhes da função ou objeto
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

//Criar o objeto
let poligono = new Poligono(50,60)

console.log(poligono.area)