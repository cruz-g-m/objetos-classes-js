/**
 * Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
 * Crie um método que dado a quantidade  de quilometros e o preço do combustivel nos de o valor
 * gasto em reais para realizar este percurso
 */

class Carros{
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm
    }

    descrever(){
        console.log(`Marca do carro: ${this.marca}, cor ${this.cor} e o consumo médio por KM rodado é ${this.gastoPorKm.toFixed(2)}.`);
    }

    calcularViagem(percurso, precoGasolina){
       return (percurso * this.gastoPorKm) * precoGasolina;
    }
}

const bmw = new Carros('BMW', 'Amarelo', 1/12);
bmw.descrever();
console.log(`Em uma viagem de 100km você gastará R$` + bmw.calcularViagem(100, 4.0).toFixed(2));

console.log('==================//====================')

const palio = new Carros('Palio', 'Prata', 1/15);
palio.descrever();
console.log(`Em uma viagem de 100km você gastará R$` + palio.calcularViagem(100, 4.0).toFixed(2));

