let numero = Number(prompt("digite um número"));
const numerotitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numerotitulo.innerHTML = numero;
texto.innerHTML = `<p> seu numero + 2 é ${numero + 2}</p><p> Raiz Quadrada : ${Math.sqrt(numero)}</p>`;