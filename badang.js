class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

class Result {
  evaluate(student) {
    return student.score >= 75 ? "Passed" : "Failed";
  }
}

const s1 = new Student("Ana", 90);
const s2 = new Student("Ben", 60);
const result = new Result();

for (const student of [s1, s2]) {
  if (student.score >= 75) console.log(student.name, result.evaluate(student));
  if (student.score < 75) console.log(student.name, result.evaluate(student)); 
}
