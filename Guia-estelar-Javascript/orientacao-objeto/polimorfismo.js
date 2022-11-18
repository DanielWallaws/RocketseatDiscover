class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria () {
        if(this.peso <= 50) {
            this.categoria = 'infantil'
        }
        else if (this.peso <= 65) { 
            this.categoria = 'juvenil'
        } 
        else {
            this.categora = 'adulto'
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }
    

    definirCategoria () {
        if(this.peso <= 54) {
            this.categoria = 'pluma'
        }
        else if (this.peso <= 60) { 
            this.categoria = 'leve'
        } 
        else if (this.peso <= 75) { 
            this.categoria = 'meio-leve'
        } 
        else {
            this.categora = 'pesado'
        }
    }

    get corpoAtleta() {
        let value = this.categoria
        return value;
    }
}

let competidor = new Lutador(60);
console.log(competidor)