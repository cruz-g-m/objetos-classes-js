/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura))
 * Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça para
 * José dizer o valor do seu IMC;
 */

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, estou pesando ${this.peso}kg e tenho de altura ${this.altura}cm`);
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 &&imc <= 25) {
            return 'Peso Normal';
        } else if (imc >= 25 &&imc <= 30) {
            return 'Acima do Peso';
        } else if (imc >= 30 &&imc <= 40) {
            return 'Obeso';
        } else if (imc > 40) {
            return 'Obsidade Grave';
        }
    }
}

const guilherme = new Pessoa('Guilherme', 95, 1.70);
guilherme.descrever();
console.log('O Indice de massa corporal é: ' + guilherme.calcularImc().toFixed(2) + ' ' + guilherme.classificarImc());

console.log('======================//====================')

const gabriela = new Pessoa('Gabriela', 52, 1.55);
gabriela.descrever();
console.log('O Indice de massa corporal é: ' + gabriela.calcularImc().toFixed(2) + ' ' + gabriela.classificarImc());