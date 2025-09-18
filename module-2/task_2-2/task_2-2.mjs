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
const dollarToNOK = 76 / 8.6
const TotalDollar = 54
const TotalNOK = TotalDollar * dollarToNOK
printOut("54 dollars is equal to " + TotalNOK.toFixed(0) + " NOK.");
printOut
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sentence = "There is much between heaven and earth that we do not understand.";
const countCharacters = sentence.length;
printOut("The sentence: \"" + sentence + "\" has " + countCharacters + " characters.");
printOut("The character at position 19 is " + sentence.charAt(19) + ".");
printOut("The characters between position 35 and 8 characters forward is " + sentence.substr(35, 8) + ".");
printOut("The index at which the word 'earth' starts is " + sentence.indexOf("earth") + ".");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5 is grater than 3: " + (5 > 3));
printOut("Is 7 grater than or equal to 7: " + (7 >= 7));
printOut("Is a grater then b: " + ("a" > "b"));
printOut("Is 1 less than a: " + (1 < "a"));
printOut("arne is not equal to thomas: " + ("arne" != "thomas"));
printOut("2 is equal to 5: " + (2 == 5));
printOut("abcd is grater than bcd: " + ("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const num1 = Number("254");
const num2 = Number("57.23");
const num3 = Number("25 kroner");

printOut('"254" converted to a number is: ' + num1);
printOut('"57.23" converted to a number is: ' + num2);
printOut('"25 kroner" converted to a number is: ' + num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;
printOut("Random number r (1 <= r <= 360): " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;
printOut(totalDays + " days is " + weeks + " weeks and " + days + " days.");
printOut(newLine);