

let jose = {
    nome: "José da Silva",
    idade: 27,
    peso: 83.5,
    altura: 1.7
  };
  
  let carlos = {
    nome: "Carlos de Souza",
    idade: 28,
    peso: 80.1,
    altura: 1.76
  };
  
  let aline = {
    nome: "Aline Ferreira",
    idade: 33,
    peso: 63.7,
    altura: 1.53
  };
  
  let ana = {
    nome: "Ana Paula",
    idade: 26,
    peso: 55.0,
    altura: 1.62
  };
  
  // Função para calcular o IMC
  function calcularIMC(pessoa) {
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    return `${pessoa.nome} tem a idade de ${pessoa.idade} anos e seu IMC  e de' ${imc.toFixed(2)}`;
  }
  
  // Calculando o IMC de cada pessoa e imprimindo na tela com o retorno da função
  console.table(calcularIMC(jose),);
  console.table(calcularIMC(carlos));
  console.table(calcularIMC(aline));
  console.table(calcularIMC(ana));
  