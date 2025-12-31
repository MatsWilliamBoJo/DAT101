"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textPartLine1 = "";
let textPartLine2 = "";

for (let i = 1, j = 10; i <= 10; i++, j--) {
  textPartLine1 += i + " ";
  textPartLine2 += j + " ";
}
printOut(textPartLine1);
printOut(textPartLine2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1GuessNumber = 45;
let part1Random = Math.floor(Math.random() * 60 + 1);
while (part1Random !== part1GuessNumber) {
  part1Random = Math.floor(Math.random() * 60 + 1);
}
printOut("YES! You guessed it right! The number is " + part1Random);

printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Time = Date.now();
const part3GuessNumber = 654321;
let part3Random = 1;
let part3Counter = 0;
do {
  part3Random = Math.floor(Math.random() * 1000000) + 1;
  part3Counter++;
} while (part3Random !== part3GuessNumber);

printOut("Number of guesses: " + part3Counter);
const part3DeltaTime = Date.now() - part3Time;
printOut("Number of milliseconds: " + part3DeltaTime);



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = [];

for (let num = 2; num < 200; num++) {
  let isPrime = true;
  let divisor = 2;
  while (divisor <= Math.sqrt(num)) {
    if (num % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }
  if (isPrime) {
    primes.push(num);
  }
}

printOut("Prime numbers between 2 and 199:");
printOut(primes.join(", "));
printOut(newLine);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
  let line = "";
  for (let col = 1; col <= 9; col++) {
    line += "K" + col + "R" + row + " ";
  }
  printOut(line.trim());
}
printOut(newLine);


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const maxPoints = 236;
let grade1 = Math.floor(Math.random() * maxPoints) + 1;
let grade2 = Math.floor(Math.random() * maxPoints) + 1;
let grade3 = Math.floor(Math.random() * maxPoints) + 1;
let grade4 = Math.floor(Math.random() * maxPoints) + 1;
let grade5 = Math.floor(Math.random() * maxPoints) + 1;

function getLetterGrade(points) {
  const percent = (points / maxPoints) * 100;
  if (percent >= 89) return "A";
  if (percent >= 77) return "B";
  if (percent >= 65) return "C";
  if (percent >= 53) return "D";
  if (percent >= 41) return "E";
  return "F";
}

printOut("Student 1: " + grade1 + " points, Grade: " + getLetterGrade(grade1));
printOut("Student 2: " + grade2 + " points, Grade: " + getLetterGrade(grade2));
printOut("Student 3: " + grade3 + " points, Grade: " + getLetterGrade(grade3));
printOut("Student 4: " + grade4 + " points, Grade: " + getLetterGrade(grade4));
printOut("Student 5: " + grade5 + " points, Grade: " + getLetterGrade(grade5));
printOut(newLine);

/* Bonus: Sort and print the 5 grades in descending order (without using an array) */
printOut("Grades in descending order (points):");
let g1 = grade1, g2 = grade2, g3 = grade3, g4 = grade4, g5 = grade5;
for (let i = 0; i < 5; i++) {
  let max = g1, idx = 1;
  if (g2 > max) { max = g2; idx = 2; }
  if (g3 > max) { max = g3; idx = 3; }
  if (g4 > max) { max = g4; idx = 4; }
  if (g5 > max) { max = g5; idx = 5; }
  printOut("Student " + idx + ": " + max + " points, Grade: " + getLetterGrade(max));
  // Mark as used by setting to -1
  if (idx === 1) g1 = -1;
  if (idx === 2) g2 = -1;
  if (idx === 3) g3 = -1;
  if (idx === 4) g4 = -1;
  if (idx === 5) g5 = -1;
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Helper to roll 6 dice
function rollDice() {
  let dice = [];
  for (let i = 0; i < 6; i++) {
    dice.push(Math.floor(Math.random() * 6) + 1);
  }
  return dice;
}

// Full straight: 1 2 3 4 5 6
let throwsStraight = 0;
do {
  throwsStraight++;
  let dice = rollDice();
  let sorted = dice.slice().sort((a, b) => a - b);
  if (sorted.join("") === "123456") break;
} while (true);
printOut("Throws needed for full straight (1-6): " + throwsStraight);

// 3 pairs
let throwsPairs = 0;
do {
  throwsPairs++;
  let dice = rollDice();
  let counts = {};
  dice.forEach(d => counts[d] = (counts[d] || 0) + 1);
  let pairs = Object.values(counts).filter(c => c === 2).length;
  if (pairs === 3) break;
} while (true);
printOut("Throws needed for 3 pairs: " + throwsPairs);

// 2 of a kind and 4 of a kind (tower)
let throwsTower = 0;
do {
  throwsTower++;
  let dice = rollDice();
  let counts = {};
  dice.forEach(d => counts[d] = (counts[d] || 0) + 1);
  let hasFour = Object.values(counts).includes(4);
  let hasTwo = Object.values(counts).includes(2);
  if (hasFour && hasTwo) break;
} while (true);
printOut("Throws needed for tower (4 of a kind + 2 of a kind): " + throwsTower);

// All the same (Yahtzee)
let throwsYahtzee = 0;
do {
  throwsYahtzee++;
  let dice = rollDice();
  if (dice.every(d => d === dice[0])) break;
} while (true);
printOut("Throws needed for Yahtzee (all the same): " + throwsYahtzee);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
