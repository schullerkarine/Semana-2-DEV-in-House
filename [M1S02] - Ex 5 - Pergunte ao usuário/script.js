var nome = prompt("Qual o seu nome?");
var idade = prompt("Qual sua idade?");
while (isNaN(idade)) {
    idade = prompt("Por gentileza, digite um valor válido para sua idade.");
}
var esporte = confirm("Você gosta de praticar algum esporte?");
if (esporte == false) { var gosta = "não" }
else { var gosta = "" }

window.alert(nome + ", " + idade + ", " + gosta + " gosta de esportes. 😶")
