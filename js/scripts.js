var add = function(number1, number2) {
    return number1 + number2;
};

var multiplication = function(number1, number2) {
    return number1 * number2;
};

var division = function(number1, number2) {
    return number1 / number2;
};

var subtraction = function(number1, number2) {
    return number1 - number2;
};

$(document).ready(function() {
    $("form#add").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        var result = add(number1, number2);
        $("#sum").text(result);
    });
    $("form#subtract").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#subtract1").val());
        var number2 = parseInt($("#subtract2").val());
        var result = subtraction(number1, number2);
        $("#difference").text(result);
    });
    $("form#multiply").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#multiply1").val());
        var number2 = parseInt($("#multiply2").val());
        var result = multiplication(number1, number2);
        $("#product").text(result);
    });
    $("form#divide").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#divide1").val());
        var number2 = parseInt($("#divide2").val());
        var result = division(number1, number2).toFixed(2);
        $("#quotient").text(result);
    });
});
