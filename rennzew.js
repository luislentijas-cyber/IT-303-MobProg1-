const student = {
  name: "Mia",
  address: { city: "Iloilo" }
};

const course = {
  title: "JavaScript",
  teacher: { name: "Mr. Cruz" }
};

const { name, address } = student;
const { title, teacher } = course;

console.log(name, address?.city);
console.log(title, teacher?.name);
console.log(student.contact?.email ?? "No email");
