let numero = Number(prompt("digite um número"));
const numerotitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numerotitulo.innerHTML = numero;
texto.innerHTML += `<p> Raiz Quadrada : ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> número é inteiro? : ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> é um NaN ?  ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> arredondando para baixo fica: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> arredondado para cima é : ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>e com duas casas decimais é : ${numero.toFixed(2)}</p>`;