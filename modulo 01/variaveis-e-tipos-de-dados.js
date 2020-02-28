///objetos
x = {}; //declarando um objeto vazio

var pessoa = {}; //declarando pessoa como um objeto vazio

pessoa = {
  altura: 1.87,
  peso: 90
};

console.log(`peso: ${pessoa.peso}`);
console.log(`altura: ${pessoa.altura}`);
console.log(`acessando altura com anotação de array: ${pessoa["altura"]}`);

pessoa.altura = 1.9; //alterando o valor de altura

console.log(`altura alterada: ${pessoa.altura}`);

//array

var numeros = [1, 2, 3, 4, 5, 6]; //declaração de um array

console.log(`numeros: ${numeros}`);

console.log(`primeiro valor do array: ${numeros[0]}`);
console.log(`quarto valor do array: ${numeros[3]}`);
