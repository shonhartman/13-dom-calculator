
//TAKES TWO DIGITS

let digits = document.querySelectorAll(".digit")

Array.from(digits).forEach((digit) => {

  digit.addEventListener("click", (e) => {

    let textEl = document.createTextNode(e.target.innerHTML);
    document.querySelector("#answer").appendChild(textEl);

  })

})

//OPERATORS TO SCREEN

document.querySelector("#addNumbers").addEventListener ("click", (e) => {
  let plus = document.createTextNode("+");
  document.querySelector("#answer").appendChild(plus);
})

document.querySelector("#subtractNumbers").addEventListener ("click", (e) => {
  let subtract = document.createTextNode("-");
  document.querySelector("#answer").appendChild(subtract);
})

document.querySelector("#divideNumbers").addEventListener ("click", (e) => {
  let divide = document.createTextNode("/");
  document.querySelector("#answer").appendChild(divide);
})

document.querySelector("#multiplyNumbers").addEventListener ("click", (e) => {
  let multiply = document.createTextNode("*");
  document.querySelector("#answer").appendChild(multiply);
})

//CLEAR
document.querySelector(".clear").addEventListener ("click", (e) => {
  document.querySelector("#answer").innerHTML = "";
})

//EQUALS

document.querySelector("#equals").addEventListener ("click", (e) => {
  let evaluate = document.querySelector("#answer").innerHTML;
  document.querySelector("#answer").innerHTML = eval(evaluate);

})
