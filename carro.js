function Carro(tipo) {
    this.tipo = tipo;
}

function ModeloCarro(tipo, marca, cavalos) {
    this.marca = marca;

    let _cavalos = cavalos;

    this.getCavalos = function() {
        return _cavalos;
    }

    this.setCavalos = function(valor) {
        if (typeof valor === 'number') {
            _cavalos = valor;
        }
    }

    this.tunado = function() {
        const novoCavalos = _cavalos * 1.50;
        this.setCavalos(novoCavalos);
        console.log(`Tunado: ${novoCavalos} HP`);
    }

    Carro.call(this, tipo);
}

function Ferrari(tipo) {
    ModeloCarro.call(this, tipo, "Ferrari", 960);

    this.tunado = function() {
        const novoCavalos = this.getCavalos() * 1.2;
        this.setCavalos(novoCavalos);
    }
}

function Mustang(tipo) {
    ModeloCarro.call(this, tipo, "Mustang", 800);

    this.tunado = function() {
        const novoCavalos = this.getCavalos() * 1.1;
        this.setCavalos(novoCavalos);
    }
}

function Skyline(tipo) {
    ModeloCarro.call(this, tipo, "Skyline", 1000);

    this.tunado = function() {
        const novoCavalos = this.getCavalos() * 1.5;
        this.setCavalos(novoCavalos);
    }
}

const modeloCarro1 = new Ferrari("Esportivo");
const modeloCarro2 = new Mustang("Luxuoso");
const modeloCarro3 = new Skyline("Drift");

modeloCarro1.tunado();
console.log(modeloCarro1.tipo);
console.log(modeloCarro1.marca);
console.log(`Potencia de fabrica: ${modeloCarro1.getCavalos()} HP`);
console.log(`Potencia de ${modeloCarro1.getCavalos()} HP`, '\n');

modeloCarro2.tunado();
console.log(modeloCarro2.tipo);
console.log(modeloCarro2.marca);
console.log(`Potencia de fabrica: ${modeloCarro2.getCavalos()} HP`);
console.log(`Potencia de ${modeloCarro2.getCavalos()} HP`, '\n');

modeloCarro3.tunado();
console.log(modeloCarro3.tipo);
console.log(modeloCarro3.marca);
console.log(`Potencia de fabrica: ${modeloCarro3.getCavalos()} HP`);
console.log(`Potencia de ${modeloCarro3.getCavalos()} HP`);