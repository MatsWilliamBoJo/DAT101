"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;
printOut("The answer to the original expression is 2 + 3 * 2 - 4 * 6 = " + originalExpression);
printOut("The answer to the modified expression is 2 + 3 * (2 - 4) * 6 = " + modifiedExpression);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertMetersToInches(meters) {
    const inches = meters * 39.3701;
    return inches;
}

const meters = 25.34;
const inches = convertMetersToInches(meters);
printOut(meters + " meters is equal to " + inches.toFixed(2) + " inches.");
printOut("");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Days = 3, part3Hours = 14, part3Mintes = 14, part3Seconds = 34;
const totalMinutes = (part3Days * 24 * 60) + (part3Hours * 60) + part3Mintes + (part3Seconds / 60);
printOut(part3Days + " days, " + part3Hours + " hours, " + part3Mintes + " minutes, and " + part3Seconds + " seconds is equal to a total of " + totalMinutes + " minutes.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part4Minutes = 6332.52;
const part4days = part4Minutes / (24 * 60), part4hours = (part4Minutes % (24 * 60)) / 60, part4minutes = part4Minutes % 60, part4seconds = (part4Minutes * 60) % 60;
printOut("6332.52 minutes is equal to " + part4Minutes + " minutes is equal to " + part4days.toFixed(2) + " days, " + part4hours.toFixed(2) + " hours, " + part4minutes.toFixed(2) + " minutes, and " + part4seconds.toFixed(2) + " seconds.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const exchangeRate = 8.6 / 76 // USD to NOK
const money = exchangeRate * 100;
printOut("100 USD is equal to " + money.toFixed(2) + " NOK.");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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