const numbers = [1, 2, 3];
const names = ["Ana", "Ben", "Cara"];

const double = n => n * 2;
const greet = name => `Hello, ${name}!`;
const describe = n => `The number is ${n}.`;

const doubled = numbers.map(double);
const greetings = names.map(greet);

console.log(`Doubled values: ${doubled.join(", ")}`);
console.log(greetings);
console.log(describe(10));
