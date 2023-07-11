let number1 = Number(prompt("Insira o primeiro número: "))
let number2 = Number(prompt("Insira o segundo número: "))

function sum(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function multiplication(number1,number2) {
  return number1 * number2;
}

function division(number1, number2) {
  return (number1/number2).toFixed(2)
}

function rest(number1,number2) {
  return number1 % number2;
}

function ver(num){
 if (num % 2 == 1) {
  return "que é impar"
 }
 else if(num % 2 == 0){
  return "que é par"
 }
 else{
  return "que é número decimal"
 }

 }
 


console.log(`O resultado da soma de ${number1} + ${number2} = ${sum(number1,number2)} ${ver(sum(number1, number2))}`)
console.log(`O resultado da multiplicacao de ${number1} * ${number2} = ${multiplication(number1,number2)} ${ver(multiplication(number1, number2))}`)
console.log(`O resultado da divisao de ${number1} / ${number2} = ${division(number1,number2)} ${ver(division(number1, number2))}`)
console.log(`O resultado da subtração de ${number1} - ${number2} = ${subtraction(number1,number2)} ${ver(subtraction(number1, number2))}`)
console.log(`O resultado do resto de ${number1} / ${number2} = ${rest(number1,number2)} ${ver(rest(number1, number2))}`)