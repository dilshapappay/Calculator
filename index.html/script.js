let input = document.getElementById("input-box");
let button = document.querySelectorAll("button"); 

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    btn_click(this.textContent);
  });
});

function btn_click(val) {
  if (val === "DEL") {
    input.value = input.value.slice(0, -1);
  } else {
    input.value += val.toString();
  }
}

function clearCalculator() {
  input.value = "";
}
function EqualClick() {
    var input = document.getElementById("input-box"); // Get the input element
    var text = input.value; // Get the value of the input element
    var res = eval(text); // Evaluate the expression
    input.value = res; // Set the result back to the input element
  }
  