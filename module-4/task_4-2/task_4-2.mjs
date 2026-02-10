"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let part1Text = "";
for(let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
    const value = part1Array[i]; // -> every index of part1Array
    part1Text += value.toString() + ", ";
}
printOut(part1Text);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part2Text = part1Array.join(", ");
printOut(part2Text);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3greeting = "Hello there, how are you?";
const greetingArray = part3greeting.split(" ");
let part3Text = " ";
for(let i = 0; i < greetingArray.length; i++) {
    const word = greetingArray[i];
    part3Text += " index: " + i.toString() + " = " + word + newLine;
}
printOut(part3Text);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
function removeNameFromArray(aArray, aName) {
    let deleteIndex = -1;
    for(let i = 0; i < aArray.length; i++){
        const name = aArray[i];
        if (name === aName) {
          //her kan vi slette elementet for eksempel "Hilde".
          //Dette gjør vi ikke her! Her løper vi igjen, og må slette senere!
          //Vi må lagre indeksen i en variabel.
          deleteIndex = i;
        }
    }
    //test om jeg kan slette
    if (deleteIndex >= 0) {
        printOut(aName + " is found and deleted");
    } else {
        printOut(aName + " is not found");
    }
}

removeNameFromArray(girls, "Hilde");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus"];

const allNames = girls.concat(boys);
printOut(allNames.join(", "));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor(aTitle, aAuthor, aYearPublished) {
        this.title = aTitle;
        this.author = aAuthor;
        this.yearPublished = aYearPublished;
    }
    toString() {
        return `${this.title}, by ${this.author} (${this.yearPublished})`;
    }
}

const bookList = [
    new TBook("To Kill a Mockingbird", "Harper Lee", 1960),
    new TBook("1984", "George Orwell", 1949),
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new TBook("The Catcher in the Rye", "J.D. Salinger", 1951),
    new TBook("Moby Dick", "Herman Melville", 1851)
];
for (let book of bookList) {
    printOut(book.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Static object with weekday values and names
// Static object with weekday values and names
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Monday" },
    WeekDay2: { value: 0x02, name: "Tuesday" },
    WeekDay3: { value: 0x04, name: "Wednesday" },
    WeekDay4: { value: 0x08, name: "Thursday" },
    WeekDay5: { value: 0x10, name: "Friday" },
    WeekDay6: { value: 0x20, name: "Saturday" },
    WeekDay7: { value: 0x40, name: "Sunday" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays" },
    Weekends: { value: 0x20 + 0x40, name: "Weekend" }
};

// Get all keys from the EWeekDays object
const keys = Object.keys(EWeekDays);

// Loop through the keys and print each entry
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const entry = EWeekDays[key];
    printOut(`${key} → Value: ${entry.value}, Name: ${entry.name}`);
}
printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randNums = [];
for (let i = 0; i < 35; i++) {
  randNums.push(Math.floor(Math.random() * 20) + 1);
}
printOut("Original (35): " + randNums.join(", "));


const asc = randNums.slice().sort((a, b) => a - b);
printOut("Ascending: " + asc.join(", "));


const desc = randNums.slice().sort((a, b) => b - a);
printOut("Descending: " + desc.join(", "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const randomArray = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

const ascending = [...randomArray].sort((a, b) => a - b);
printOut("Ascending: " + ascending.join(", "));

const descending = [...randomArray].sort((a, b) => b - a);
printOut("Descending: " + descending.join(", "));

const frequencyMap = {};
for (let num of randomArray) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
}

printOut("Number → Frequency:");
Object.keys(frequencyMap)
    .sort((a, b) => a - b)
    .forEach(num => {
        printOut(`${num} → ${frequencyMap[num]}`);
    });

const frequencyGroups = {};

for (let num in frequencyMap) {
    const freq = frequencyMap[num];
    if (!frequencyGroups[freq]) frequencyGroups[freq] = [];
    frequencyGroups[freq].push(Number(num));
}

const sortedFrequencies = Object.keys(frequencyGroups)
    .map(Number)
    .sort((a, b) => b - a);

printOut("Frequency → Numbers:");
for (let freq of sortedFrequencies) {
    const nums = frequencyGroups[freq].sort((a, b) => a - b);
    printOut(`${freq} → ${nums.join(", ")}`);
}

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let array2D = [];

for (let row = 0; row < 5; row++) {
    array2D[row] = []; 
    for (let col = 0; col < 9; col++) {
        array2D[row][col] = `Row ${row + 1}, Column ${col + 1}`;
    }
}

printOut("Printing array row by row:");
for (let row = 0; row < array2D.length; row++) {
    let rowText = "";
    for (let col = 0; col < array2D[row].length; col++) {
        rowText += array2D[row][col] + " | ";
    }
    printOut(rowText);
}

printOut("\nPrinting each cell individually:");
for (let row = 0; row < array2D.length; row++) {
    for (let col = 0; col < array2D[row].length; col++) {
        printOut(array2D[row][col]);
    }
}