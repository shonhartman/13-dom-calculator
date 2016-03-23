function (numberOne, numberTwo) {

}

// Keisker
document
  .querySelector("#add")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) + Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });

document
  .querySelector("#subtract")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) - Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });

document
  .querySelector("#multiply")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) * Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });

document
  .querySelector("#divide")
  .addEventListener("click", function() {
    var firstNumber = document.querySelector("#numberOne").value;
    var secondNumber = document.querySelector("#numberTwo").value;
    // add numbers together
    var total = Number(firstNumber) / Number(secondNumber);
    // change answer to be the result
    document.querySelector("#answer").innerHTML = total;
  });

  // James

  document
  .querySelector("#addnumbers")
  .addEventListener("click", function(e){
    var leftbox = document.querySelector("#numberOne").value;
    var rightbox = document.querySelector("#numberTwo").value;
    var total = Number(leftbox) + Number(rightbox);
    document.querySelector("#answer").innerHTML = total;

  });

document
  .querySelector("#subtractnumbers")
  .addEventListener("click", function(e){
    var leftbox = document.querySelector("#numberOne").value;
    var rightbox = document.querySelector("#numberTwo").value;
    var total = Number(leftbox) - Number(rightbox);
    document.querySelector("#answer").innerHTML = total;

  });

  document
    .querySelector("#dividenumbers")
    .addEventListener("click", function(e){
      var leftbox = document.querySelector("#numberOne").value;
      var rightbox = document.querySelector("#numberTwo").value;
      var total = Number(leftbox) / Number(rightbox);
      document.querySelector("#answer").innerHTML = total;

    });

    document
      .querySelector("#multiplynumbers")
      .addEventListener("click", function(e){
        var leftbox = document.querySelector("#numberOne").value;
        var rightbox = document.querySelector("#numberTwo").value;
        var total = Number(leftbox) * Number(rightbox);
        document.querySelector("#answer").innerHTML = total;

      });

      // Nancy

      var addButton = document.querySelector("#addNumbers");
addButton.addEventListener("click", function(add){
  add.preventDefault();
    var numberOne = document.querySelector("#numberOne").value;
    var numberTwo = document.querySelector("#numberTwo").value;
    var sum = Number(numberOne) + Number(numberTwo);

  document.querySelector("#answer").innerHTML=sum;
});

var subtractButton = document.querySelector("#subtractNumbers");
subtractButton.addEventListener("click", function(subtract){
  subtract.preventDefault();
  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;
  var difference = Number(numberOne) - Number(numberTwo);

  document.querySelector("#answer").innerHTML=difference;
});

var divideButton = document.querySelector("#divideNumbers");
divideButton.addEventListener("click", function(divide){
  divide.preventDefault();
  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;
  var quotient = Number(numberOne) / Number(numberTwo);

  document.querySelector("#answer").innerHTML=quotient;

});

var multiplyButton = document.querySelector("#multiplyNumbers");
multiplyButton.addEventListener("click", function(multiply){
  multiply.preventDefault();
  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;
  var product = Number(numberOne) * Number(numberTwo);

  document.querySelector("#answer").innerHTML=product;

});

// Booher

var addNumbers = document.querySelector("#addNumbers");
var subtractNumbers = document.querySelector("#subtractNumbers");
var divideNumbers = document.querySelector("#divideNumbers");
var multiplyNumbers = document.querySelector("#multiplyNumbers");
var answer = document.querySelector("#answer");
var equals = document.querySelector("#equals");
var clear = document.querySelector("#clear");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");
var decimal = document.querySelector("#decimal");
var sum = 0;

var display = "";
answer.innerHTML = display;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply (a, b) {
  return a * b;
}

var addToDisplay = function(value) {
  if(value === zero && display.length < 1) {
    console.log("Error");
  }
  else {
    display = display + value.innerHTML;
    console.log(display);
    answer.innerHTML = "";
    answer.innerHTML = display;
  }
}

//NUMBER BUTTONS

one.addEventListener("click", addToDisplay.bind(null, one));
two.addEventListener("click", addToDisplay.bind(null, two));
three.addEventListener("click", addToDisplay.bind(null, three));
four.addEventListener("click", addToDisplay.bind(null, four));
five.addEventListener("click", addToDisplay.bind(null, five));
six.addEventListener("click", addToDisplay.bind(null, six));
seven.addEventListener("click", addToDisplay.bind(null, seven));
eight.addEventListener("click", addToDisplay.bind(null, eight));
nine.addEventListener("click", addToDisplay.bind(null, nine));
zero.addEventListener("click", addToDisplay.bind(null, zero));
decimal.addEventListener("click", addToDisplay.bind(null, decimal));

//EQUATIONS
addNumbers.addEventListener("click", addToDisplay.bind(null, addNumbers));
subtractNumbers.addEventListener("click", addToDisplay.bind(null, subtractNumbers));
divideNumbers.addEventListener("click", addToDisplay.bind(null, divideNumbers));
multiplyNumbers.addEventListener("click", addToDisplay.bind(null, multiplyNumbers));

equals.addEventListener("click", function(e) {
  sum = eval(display);
  answer.innerHTML = "";
  answer.innerHTML = sum;
});
