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
