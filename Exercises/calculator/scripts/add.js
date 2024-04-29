"use strict";
function add() {
  var numberOne = 120;
  var numberTwo = 240;
  var result = numberOne + numberTwo;
  console.log(result);
}
//add();
function init() {
  var addButton = document.getElementById("addButton")
 addButton.onclick = add
}
 //init();
window.onload = init;
