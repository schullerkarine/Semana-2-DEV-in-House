var anoNasc = parseInt(window.prompt("Em que ano você nasceu?"));
var anoAtual = parseInt(window.prompt("Em que ano nós estamos?"));
var idade = anoAtual - anoNasc;
var idade2 = idade - 1;
window.alert("Sua idade é " + idade2 + " ou " + idade + ".");