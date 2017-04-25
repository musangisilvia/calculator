var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var multiplication = function(number1, number2) {
  return number1 * number2;
};

var division = function(number1, number2) {
  return number1 / number2;
};

var subtraction = function(number1, number2) {
  return number1 - number2;
};

var result = subtraction(number1, number2);
alert(result);
