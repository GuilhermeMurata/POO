const carro = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("vruum");
    }
}

const carroJoao = new Carro("Fiesta", "Ford", 2020, 2019);
const carroMaria = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroJoao);
console.log(carroMaria);

const nome = "Murata"
const idade = 19
const eMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome);