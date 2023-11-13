let display = document.getElementById('display');
// KeyboardEvent
function handleKeyboardInput(event) {
    const key = event.key;
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            appendToDisplay(key);
            break;
        case 'Enter':
            calculate();
            break;
        case 'Escape':
            clearDisplay();
            break;
        case 'Backspace':
            backspace();
            break;
        case 'c':
        case 'C':
            clearEntry();
            break;
        case 'x':
            calculateSquare();
            break;
        case 's':
            calculatesquareroot();
            break;
        case 'p':
            onebyx();
            break;
    }
}
document.addEventListener('keydown', handleKeyboardInput);
// manual
function appendToDisplay(value) {
    if (display.value === "0" && !isNaN(value)) {
        display.value = value;
      } 
    else{
    display.value += value;
    }
}
function clearDisplay() {
    display.value = "0";
}
function clearEntry() {
    let currentInput=display.value;
    currentInput = currentInput.replace(/(\d+(\.\d+)?[\+\-\*\/]?)$/, '');
    display.value = currentInput ||"0";
  }
function calculateSquare() {
    if(display.value==="0")
    {
        display.value="0";
    }
    else{
    display.value = Math.pow(eval(display.value), 2);
    }
}
function calculatesquareroot(){
    if(display.value==="0")
    {
        display.value="0";
    }
    else{
    display.value=Math.sqrt(eval(display.value));
    }
}
function backspace() {
    if(display.value==="0")
    {
        exit();
    }
    display.value = display.value.slice(0, -1);
  }
function onebyx(){
    if(display.value==="0")
    {
        display.value="cannot divide by zero";    }
    else{
    display.value=eval(1/display.value);
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    } 
catch (error) {
        display.value = "Error";
    }
}

const darkModeToggle = document.getElementById('darkModeToggle');
const button=document.querySelectorAll('button');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');    
    button.forEach(button => {
        button.classList.toggle('light-mode-button');
    });
});
function toggleMode(){
    const moonIcon = darkModeToggle.querySelector('.moon img');
    const sunIcon = darkModeToggle.querySelector('.sun img');
    moonIcon.style.display = (moonIcon.style.display === 'none') ? 'inline' : 'none';
    sunIcon.style.display = (sunIcon.style.display === 'none') ? 'inline' : 'none';
}