/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      // Remove all spaces from the expression
      expression = expression.replace(/\s+/g, '');

      // Validate the expression for any invalid characters
      if (/[^0-9+\-*/().]/.test(expression)) {
        throw new Error("Invalid characters in expression");
      }

      // Check for division by zero
      if (/\/0(?!\d)/.test(expression)) {
        throw new Error("Cannot divide by zero");
      }

      // Evaluate the expression using the built-in JavaScript function
      this.result = this._evaluateExpression(expression);
    } catch (error) {
      throw new Error("Error evaluating expression: " + error.message);
    }
  }

  _evaluateExpression(expression) {
    // Function to evaluate the expression safely
    return new Function('return ' + expression)();
  }
}

// Testing the Calculator class
const calculator = new Calculator();

calculator.add(10);
console.log(calculator.getResult()); // 10

calculator.subtract(3);
console.log(calculator.getResult()); // 7

calculator.multiply(2);
console.log(calculator.getResult()); // 14

calculator.divide(7);
console.log(calculator.getResult()); // 2

calculator.clear();
console.log(calculator.getResult()); // 0

calculator.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
console.log(calculator.getResult()); // 18

// Testing invalid input
try {
  calculator.calculate('10 + abc');
} catch (error) {
  console.error(error.message); // Invalid characters in expression
}

// Testing division by zero
try {
  calculator.calculate('10 / 0');
} catch (error) {
  console.error(error.message); // Cannot divide by zero
}

module.exports = Calculator;

