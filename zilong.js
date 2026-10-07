const names = ["Ana", "Ben", "Cara"];
const course = "JavaScript";

const greet = name => `Hello, ${name}!`;
const enroll = name => `${name} studies ${course}.`;
const showCount = list => list.length;

console.log(greet(names[0]));
console.log(enroll(names[1]));
console.log(showCount(names));
