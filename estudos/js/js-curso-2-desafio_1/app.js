let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function buttonConsole() {
    console.log('O botão foi clicado');
}
function buttonAlert() {
    console.log('Eu amo JS')
}
function buttonPrompt() {
    let cidade = prompt('Digite o nome de uma cidade')
    alert(`Estive em ${cidade} e lembrei de você`)
}
function buttonSoma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}