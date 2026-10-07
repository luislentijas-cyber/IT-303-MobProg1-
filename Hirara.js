const students = ["Ana", "Ben", "Cara"];
const course = "JavaScript";
const room = "Lab 1";
const school = "NwSSU";

for (const student of students) {
  console.log(`${student} studies ${course}.`);
}

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i]} is in ${room}.`);
}

console.log(`School: ${school}`);
