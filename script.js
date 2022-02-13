let outputDisplay = document.getElementById('display');


// Display 
function display(num) {
    outputDisplay.value += num;
}

// Clear 
function Clear() {
    outputDisplay.value = '';
}

// Delete 
function Delete() {
    outputDisplay.value = outputDisplay.value.slice(0, -1)
}

// Calculate Function
function calculate() {
    try {
        outputDisplay.value = eval(outputDisplay.value)
    }

    catch (err) {
        alert('Invalid')
    }


}