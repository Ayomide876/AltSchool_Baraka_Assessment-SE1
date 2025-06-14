//Change equal sign color on click event
const equalSign = document.getElementById("equal_sign");

const colors = ["blue", "orange", "green", "purple", "crimson", "#eee"];
let colorIndex = 0;

equalSign.addEventListener("click", () => {

  equalSign.style.backgroundColor = colors[colorIndex];

  // Move to the next color, or loop back to 0
  colorIndex = (colorIndex + 1) % colors.length;
});

//Change number button colors on mouseover event
let buttons = document.querySelectorAll(".input-color")

buttons.forEach(button => {
  button.addEventListener("mouseover",   () => {
      const numberButton = getComputedStyle(button).backgroundColor

    if(numberButton === "rgb(90, 87, 83)"){
      button.style.backgroundColor = "rgb(63, 55, 55)"
    } else {
      button.style.backgroundColor = "rgb(90, 87, 83)"
    }
  }

  



)})


// Catching Error Messages
equalSign.addEventListener("click", ()=>{
  try{
    const result = eval(display.value);
      if (result === undefined) {
        display.value = "Error";
      }else {
        display.value = result;
      }
  }catch(error){
    display.value = "Invalid Expression"
  }
})


//Change function button colors on mouseover event

let buttonsTwo = document.querySelectorAll(".function")

buttonsTwo.forEach(buttonTwo => {
  buttonTwo.addEventListener("mouseover",   () => {
      const numberButtonTwo = getComputedStyle(buttonTwo).backgroundColor

    if(numberButtonTwo === "rgb(255, 165, 0)"){
      buttonTwo.style.backgroundColor = "rgb(255, 134, 79)"
    } else {
      buttonTwo.style.backgroundColor = "orange"
    }
  }
)})

// const equalBtn = document.getElementById("equal_sign");
const display = document.getElementById("display_box");

//Enter key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // Prevent form from submitting 
    e.preventDefault();

    try {
      const result = eval(display.value);
      if (result === undefined) {
        display.value = "Error";
      } else {
        display.value = result;
      }
    } catch (error) {
      display.value = "Invalid Expression";
    }
  }
});




