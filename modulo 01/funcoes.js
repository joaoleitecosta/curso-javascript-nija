//o que são funçoes ? funcoes são bloco de notas javascript nomeados, e que podem ser invocados usando o operador ()

function nome() {} //declara a funcao

nome(); //chama a função

console.log(nome); //retorna apenas  a função sem executar

var x = 1;
function soma() {
  return console.log(x + 1);
}

soma();

//funçoes criam scopo, variaveis criadas dentro das funçoes só tem acesso nela mesmo
function qualquer() {
  var nome = "joao";
}

function qualquer2() {
  var nome = "joao";
  return nome;
}

console.log(`função qualquer2: ${qualquer2()}`);

var y = 5;

function cinco() {
  return 5;
}

console.log(`funcao cinco: ${cinco()}`);
console.log("funcao cinco + y:", cinco() + y);

function soma2(x, y) {
  return x + y;
}

console.log(`soma2: ${soma2(5, 2)}`);
