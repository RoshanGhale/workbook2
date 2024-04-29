"use strict";

function init() {
  const addButton = document.getElementById("addButton");
  const subButton = document.getElementById("subButton");
  const multiplyButton = document.getElementById("multiplyButton");
  const divideButton = document.getElementById("divideButton");

  addButton.onclick = addCalculation;
  subButton.onclick = subtractCalculation;
  multiplyButton.onclick = multiplyCalculation;
  divideButton.onclick = divideCalculation;
}
window.onload = init;

function addCalculation() {
  const numberOne = Number(document.getElementById("numberOne").value);
  const numberTwo = Number(document.getElementById("numberTwo").value);

  let result = numberOne + numberTwo;
  let answer = document.getElementById("answerInput");
  answerInput.value = result;
}

function subtractCalculation() {
  const numberOne = Number(document.getElementById("numberOne").value);
  const numberTwo = Number(document.getElementById("numberTwo").value);


  let result = numberOne - numberTwo;
  let answer = document.getElementById("answerInput");
  answerInput.value = result;
}

function multiplyCalculation() {
  const numberOne = Number(document.getElementById("numberOne").value);
  const numberTwo = Number(document.getElementById("numberTwo").value);


  let result = numberOne * numberTwo;
  let answer = document.getElementById("answerInput");
  answerInput.value = result;
}

function divideCalculation() {
  const numberOne = Number(document.getElementById("numberOne").value);
  const numberTwo = Number(document.getElementById("numberTwo").value);


  let result = numberOne / numberTwo;
  let answer = document.getElementById("answerInput");
  answerInput.value = result;
}
