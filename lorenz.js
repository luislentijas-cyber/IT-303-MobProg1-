const colors = ["red", "green", "blue"];
const scores = [55, 56, 76];
const [firstColor, secondColor] = colors;
const [topScore, nextScore] = scores;

const student = { name: "Lorenz", age: 20 };
const school = { schoolName: "NwSSU", city: "Calbayog" };
const { name, age } = student;
const { schoolName, city } = school;

const showColor = () => console.log(firstColor, secondColor);
const showScore = () => console.log(topScore, nextScore);
const showStudent = () => console.log(name, age, schoolName, city);

showColor();
showScore();
showStudent();
