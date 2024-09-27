function capitalize(str) {
  return str
    .split("")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
var u_input = prompt("Enter your text;");
console.log(capitalize(u_input));

function factorialize(num) {
  if (isNaN(num) || num < 0) {
    // Check if input is not a number or negative
    return "Please enter a non-negative number";
  }

  if (num === 0 || num === 1) {
    return 1; // Base case for factorial of 0 or 1
  }

  return num * factorialize(num - 1); // Recursive call
}

var input = prompt("Enter a number to factorialize: ");
var value = parseInt(input); // Convert the input to an integer

var result = factorialize(value);
console.log(result); // Log the result to the console
