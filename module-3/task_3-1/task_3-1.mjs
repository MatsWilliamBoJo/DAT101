"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const integer = 0;
if (integer > 0) {
  printOut("The integer is a positive number.");
} else if (integer < 0) {
  printOut("The integer is a negative number.");
} else {
  printOut("The integer is zero.");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) + 1;
if (imageSize <= 4) {
  printOut("The image is too small");
} else if (imageSize >= 6) {
  printOut("The image is too big");
} else {
  printOut("Thank you");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")) {
  printOut("The month" + " " + monthName + " " + "contains the letter 'r'. Take you´r vitamins!");
} else {
  printOut("The month " + monthName + " does not contain the letter 'r'. skip the vitamins!");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const January = 31;
const February = 28;
const Mars = 31;
const April = 30;
const Mai = 31;
const Jun = 30;
const Juli = 31;
const August = 31;
const September = 30;
const October = 31;
const November = 30;
const December = 31;

if (monthName === "January") {
  printOut("The month " + monthName + " has " + January + " days.");
} else if (monthName === "February") {
  printOut("The month " + monthName + " has " + February + " days.");
} else if (monthName === "Mars") {
  printOut("The month " + monthName + " has " + Mars + " days.");
} else if (monthName === "April") {
  printOut("The month " + monthName + " has " + April + " days.");
} else if (monthName === "Mai") {
  printOut("The month " + monthName + " has " + Mai + " days.");
} else if (monthName === "Jun") {
  printOut("The month " + monthName + " has " + Jun + " days.");
} else if (monthName === "Juli") {
  printOut("The month " + monthName + " has " + Juli + " days.");
} else if (monthName === "August") {
  printOut("The month " + monthName + " has " + August + " days.");
} else if (monthName === "September") {
  printOut("The month " + monthName + " has " + September + " days.");
} else if (monthName === "October") {
  printOut("The month " + monthName + " has " + October + " days.");
} else if (monthName === "November") {
  printOut("The month " + monthName + " has " + November + " days.");
} else if (monthName === "December") {
  printOut("The month " + monthName + " has " + December + " days.");
} else {
  printOut("Error");
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "January") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "February") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "Mars") {
  printOut("The month is " + monthName + " the art gallery is closed.");
} else if (monthName === "April") {
  printOut("The month is " + monthName + " the art gallery has temporary premises in the building.");
} else if (monthName === "Mai") {
  printOut("The month is " + monthName + " the art gallery is closed.");
} else if (monthName === "Jun") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "Juli") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "August") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "September") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "October") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "November") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else if (monthName === "December") {
  printOut("The month is " + monthName + " the art gallery is open.");
} else {
  printOut("Error");
}
printOut(newLine);
