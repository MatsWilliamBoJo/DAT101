"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
function calculateOnClick() {
  const textOutput1 = document.getElementById("txtTask1Output");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const width = parseInt(txtRectWidth.value);
  const height = parseInt(txtRectHeight.value);
  const area = width * height;
  const perimeter = 2 * (width + height);
  textOutput1.innerHTML = `width: ${width}, height: ${height}`;
  textOutput1.innerHTML += `<br/>Circumference = ${perimeter}, Area = ${area}`;
}

let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.onclick = calculateOnClick;

//--- Part 2 ----------------------------------------------------------------------------------------------
function textCountEnter(aEvent) {
  const textOutput2 = document.getElementById("txtTask2Output");
  if (aEvent.key === "Enter") {
    const word = txtTask2Word.value;
    task2Words.push(word);
    textOutput2.innerHTML = `You have entered ${task2Words.length} words: <br/>`;
    textOutput2.innerHTML += task2Words.join(", ");
    txtTask2Word.value = "";
  }
}

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", textCountEnter);
const task2Words = [];

//--- Part 3 ----------------------------------------------------------------------------------------------
const chkTask3 = document.getElementsByName("chkTask3");
const checkAnswer = document.getElementById("cmbTask3CheckAnswer");
const tekstOutPut3 = document.getElementById("txtTask3Output");
function cmbTask3CheckAnswerClick() {
  tekstOutPut3.innerHTML = "";
  for (let i = 0; i < chkTask3.length; i++) {
    const chkBox = chkTask3[i];
    const text = `chkTask3[${i}].checked =  ${chkBox.checked}`;
    tekstOutPut3.innerHTML += text + "<br/>";
  }
}
checkAnswer.addEventListener("click", cmbTask3CheckAnswerClick);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
