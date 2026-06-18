    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let operation = document.getElementById('operation').value;

                    let result;

        if (operation === 'multiply') {
            result = multiply(num1, num2);
        } else if (operation === 'add') {
            result = add(num1, num2);
        } else if (operation === 'subtract') {
            result = subtract(num1, num2);
        } else if (operation === 'divide') {
            result = divide(num1, num2);
        }

                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }

            function add(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Add the numbers
                return a + b;
            }   

            function subtract(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Subtract the numbers
                return a - b;
            }

            function divide(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;   
            // Check for division by zero
                if (b === 0) {
                    return 'Error: Division by zero';
                }   
                return a / b;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
            }
        