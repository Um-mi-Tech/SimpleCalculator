let currentInput = '';
let operator = '';
let firstOperand = null;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btnClass');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

function updateDisplay(){
  display.value = currentInput;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.getAttribute('data-value');
    updateDisplay();

  })
})

  equalsButton.addEventListener('click', () => {
    if (currentInput){
      const result = eval(currentInput);
      currentInput = result.toString();
      updateDisplay();
    }

  })
    

  clearButton.addEventListener('click', () =>{
    currentInput = '';
    updateDisplay();
  })