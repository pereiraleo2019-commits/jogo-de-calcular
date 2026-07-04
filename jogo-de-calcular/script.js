class Parquimetro {

    constructor(valor){
        this.valor = valor;
    }

    calcularTempo(){

        if(this.valor < 1){
            return "❌ Valor insuficiente.";
        }

        let tempo;
        let troco;

        if(this.valor >= 3){
            tempo = 120;
            troco = this.valor - 3;
        }
        else if(this.valor >= 1.75){
            tempo = 60;
            troco = this.valor - 1.75;
        }
        else{
            tempo = 30;
            troco = this.valor - 1;
        }

        return `
            <p>⏱ Tempo: <strong>${tempo} minutos</strong></p>
            <p>💰 Troco: <strong>R$ ${troco.toFixed(2)}</strong></p>
        `;
    }

}

function calcular(){

    const valor = parseFloat(document.getElementById("valor").value);

    const resultado = document.getElementById("resultado");

    if(isNaN(valor)){
        resultado.innerHTML = "Digite um valor válido.";
        return;
    }

    const estacionamento = new Parquimetro(valor);

    resultado.innerHTML = estacionamento.calcularTempo();

}