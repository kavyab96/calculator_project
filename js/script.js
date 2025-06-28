const display = document.getElementById("display");


function appendNum(e) {

  let num = e.currentTarget.value
  console.log(num === 'square');
  display.value += num

}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

const numBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator")
const equalsBtn = document.querySelector(".equal")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const squareBtn = document.querySelector(".square")
const cubeBtn = document.querySelector(".cube")


equalsBtn.addEventListener("click", calculateResult);
clearBtn.addEventListener("click", clearDisplay);
deleteBtn.addEventListener("click", deleteLast);


numBtns.forEach(btn => {
  btn.addEventListener('click', appendNum)
});
operatorBtns.forEach(op => {
  op.addEventListener('click', appendNum)
})




squareBtn.addEventListener("click", () => {
  let value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = value ** 2;
  } else {
    display.value = "Error";
  }
});

cubeBtn.addEventListener("click", () => {
  let value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = value ** 3;
  } else {
    display.value = "Error";
  }
});