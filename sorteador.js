document.addEventListener('DOMContentLoaded', () => {  //tive q botar pra carregar o html primeiro pq os botões não funcionavam as vezes

    function sortearNumero() {
        const min = parseInt(document.querySelector('.input-min').value);
        const max = parseInt(document.querySelector('.input-max').value);

        if (isNaN(min) || isNaN(max)) {
            alert("Por favor, insira números válidos!");
            return;
        }

        if (min > max) {
            alert("O valor mínimo deve ser menor ou igual ao valor máximo.");
            return;
        }

        const resultado = Math.floor(Math.random() * (max - min + 1)) + min; //cálculo p sortear o numero

        document.querySelector('.resultado').textContent = `Número sorteado: ${resultado}`;
    }

    function limparCampos() {
        document.querySelector('.input-min').value = '';
        document.querySelector('.input-max').value = '';

        document.querySelector('.resultado').textContent = '--';
    }

    document.querySelector('.botao-sortear').addEventListener('click', sortearNumero);
    document.querySelector('.limpar-numeros').addEventListener('click', limparCampos);
});