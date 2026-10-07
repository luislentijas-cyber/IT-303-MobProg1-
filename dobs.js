let passingGrade = 70;
let totalPasses = 0;
let highestScore = 0;   

const studentNames = ["robb", "Lorenz", "von"];
const mathscores = [85, 95, 84];
const passStatus = [];

for (let i = 0; i < mathscores.length; i++) {

    if (mathscores[i] >= passingGrade) {
        passStatus.push("Passed");
        totalPasses++;
    } else {
        passStatus.push("Failed");
    }

    if (mathscores[i] > highestScore) {
        highestScore = mathscores[i];
    }
}

let highAchieversCount = 0;

for (const score of mathscores) {
    if (score >= 80) {
        highAchieversCount++;
    }
}

console.log("--- Student Report ---");

studentNames.forEach((name, index) => {
    console.log(
        `${name}: ${mathscores[index]} (${passStatus[index]})`
    );
});

console.log("\n--- Final Statistics ---");
console.log(`Total Passed: ${totalPasses}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`High Achievers (80+): ${highAchieversCount}`);