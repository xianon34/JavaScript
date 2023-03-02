//Parte1
function soma(num1, num2) {
    return  (num1 + num2) ;
  }
  
  function subtracao(num1, num2) {
    return (num1 - num2);
  }

  function Multiplicacao(num1, num2) {
    return (num1 * num2);
  }
  function Divisão(num1, num2) {
    return (num1/num2);
  }
//Parte 3
  function QuadradoDoNumero(num) {
    return Multiplicacao(num,num);
  }
  function mediaDeTresNumeros(num1,num2,num3) {
    let soma = num1+num2+num3;
    return Divisão (soma,3)

  }
  function calcularPorcentagem(Total,Porcentagem) {
    return Multiplicacao (Total ,Porcentagem/100);
  }
  function GeradorDePorcentagem(primeiroValor , SegundoValor) {
    return (primeiroValor/SegundoValor)*100 ;
  }
  //Parte2
  console.log("-------------- Teste de Operações / Calculadora --------------");
  console.log("O Resultado da Soma è"+soma(10,5));
  console.log("O resultado da subtração é"+subtracao(20,10));
  console.log("O resultado da Multiplicação é"+Multiplicacao(2,5));
  console.log("O resultado da Divisão é"+Divisão(10,2));
  console.log("O quadrado do Numero equivale a"+QuadradoDoNumero(10));
  console.log("A média dos três números é:" + mediaDeTresNumeros(20,10,15));
  console.log("A porcemtagem do valor è:"+Multiplicacao(100,25/100));
  console.log ("A porcentagem em relação ao segundo equivale a  "+GeradorDePorcentagem(2,200))
 
