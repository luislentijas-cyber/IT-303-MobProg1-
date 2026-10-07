const personal = { name: "Ana", age: 20 };
const academic = { course: "BSIT", year: 2 };
const contact = { email: "ana@example.com", city: "Iloilo" };

const student = { ...personal, ...academic, ...contact };

const { name, age } = personal;
const { course, year } = academic;

console.log(student);
console.log(name, age, course, year);
