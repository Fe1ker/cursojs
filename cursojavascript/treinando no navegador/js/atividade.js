let varA = 'A'; //b
let varB = 'B';//c
let varC = 'C'; // a


[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);

//Outro jeito de se fazer esse rolÊ

let aux;

aux = varA;
varA = varB; 
varB = varC;
varC = aux;

console.log(varA, varB, varC);
