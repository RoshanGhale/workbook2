function init() {
  let greetButton = document.getElementById("greetButton");
  greetButton.onclick = greet;
}
function greet() {
  let firstName = document.getElementById("firstName");
  alert("hello " + firstName.value);
}

window.onload = init