console.log('JS conectado')
// Variables
const forma = document.getElementById('forma');
let operandoA = forma['operandoA'];
let operandoB = forma['operandoB'];
//Sumar
function sumar() {
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = 'La operacion no incluye números.'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
// Restar
function restar() {
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = 'La operacion no incluye números.'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
// Multiplicacion
function multiplicar() {
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = 'La operacion no incluye números.'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
//División
function dividir() {
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = 'La operacion no incluye números.'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}