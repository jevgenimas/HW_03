// Task 1.1: Temperature Converter

function convertToFahrenheit(celsius: number): number {
  const result = (celsius * 9) / 5 + 32;
  return result;
}

// Task 1.2: Greeting Generator

function greetUser(firstName: string, lastName: string): string {
  const result = 'Hello, ' + firstName + ' ' + lastName;
  return result;
}

// Task 1.3: Rectangle Area Calculator

function calculateArea(width: number, height: number): number {
  const result = width * height;
  return result;
}

// Task 1.4: Simple Sum

function addNumbers(a: number, b: number): number {
  const result = a + b;
  return result;
}

// Outputting the results to the console

console.log(convertToFahrenheit(25));
console.log(greetUser('Anna', 'Miller'));
console.log(calculateArea(4, 5));
console.log(addNumbers(10, 15));
