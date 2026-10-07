let total = 0;
let status = "";
let index = 0;

const scores = [80, 65, 90];
const names = ["Ana", "Ben", "Cara"];

for (index = 0; index < scores.length; index++) {
  total += scores[index];
}

if (total / scores.length >= 75) {
  status = "Passed";
}

if (names.length === scores.length) {
  console.log(`${status}: all students have scores.`);
}
