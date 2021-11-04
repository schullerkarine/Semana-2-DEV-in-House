var calc = window.prompt("Qual o tipo de cálculo você deseja fazer? Digite o símbolo correspondente: +  -  *  /");
var n1 = parseFloat(window.prompt("Qual o primeiro número?"))
var n2 = parseFloat(window.prompt("Qual o segundo número?"))

var resultado;
switch (calc) {
    case '*':
        resultado = n1 * n2;
        break;
    case '+':
        resultado = n1 + n2;
        break;
    case '/':
        resultado = n1 / n2;
        break;
    case '-':
        resultado = n1 - n2;
        break;
}

window.alert("O resultado do seu cálculo é: " + resultado);

