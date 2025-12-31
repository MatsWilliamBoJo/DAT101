"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printNorwegianDate() {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formatted = today.toLocaleDateString("no-NB", options);
  printOut(formatted);
  return today; // return Date object for further use
}
const todayDate = printNorwegianDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Returns an object { days, releaseDate }
function daysUntil2XKO() {
  // May 14, 2025 (months are 0-based)
  const releaseDate = new Date(2025, 4, 14);
  // Normalize both dates to midnight local time to count full days
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  releaseDate.setHours(0, 0, 0, 0);

  const msPerDay = 24 * 60 * 60 * 1000;
  const diffMs = releaseDate - todayStart;
  const days = diffMs > 0 ? Math.ceil(diffMs / msPerDay) : 0; // 0 if already released
  return { days, releaseDate };
}

const countdown = daysUntil2XKO();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

if (countdown.days > 0) {
  printOut(
    `I dag: ${todayDate.toLocaleDateString("no-NB", options)} — ${countdown.days} dag(er) igjen til 2XKO slipper ${countdown.releaseDate.toLocaleDateString("no-NB", options)}!`
  );
} else {
  printOut(
    `I dag: ${todayDate.toLocaleDateString("no-NB", options)} — 2XKO ble utgitt ${countdown.releaseDate.toLocaleDateString("no-NB", options)}.`
  );
}
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleMetrics(radius) {
  if (typeof radius !== "number" || Number.isNaN(radius) || radius <= 0) {
    printOut("Invalid radius. Please provide a positive number.");
    return;
  }
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;

  printOut("Radius: " + radius);
  printOut("Diameter: " + diameter.toFixed(2));
  printOut("Circumference: " + circumference.toFixed(2));
  printOut("Area: " + area.toFixed(2));
}

// Example usage:
printCircleMetrics(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleMetrics(rect) {
  if (!rect || typeof rect !== "object") {
    printOut("Invalid input. Provide an object with width and height.");
    return;
  }
  const { width, height } = rect;
  if (typeof width !== "number" || typeof height !== "number" || width <= 0 || height <= 0) {
    printOut("Invalid width or height. Both must be positive numbers.");
    return;
  }
  const circumference = 2 * (width + height);
  const area = width * height;
  printOut("Width: " + width);
  printOut("Height: " + height);
  printOut("Circumference (perimeter): " + circumference.toFixed(2));
  printOut("Area: " + area.toFixed(2));
}

// Example usage:
printRectangleMetrics({ width: 10, height: 5 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
  const id = String(type).toUpperCase();
  let c, f, k;

  if (id === "C" || id === "CELSIUS") {
    c = value;
    f = (c * 9) / 5 + 32;
    k = c + 273.15;
  } else if (id === "F" || id === "FAHRENHEIT") {
    f = value;
    c = (f - 32) * 5 / 9;
    k = c + 273.15;
  } else if (id === "K" || id === "KELVIN") {
    k = value;
    c = k - 273.15;
    f = (c * 9) / 5 + 32;
  } else {
    printOut("Unknown temperature type: " + type);
    return;
  }

  // Print all three as integers (rounded)
  printOut(
    `${Math.round(c)} °C = ${Math.round(f)} °F = ${Math.round(k)} K`
  );
}

// Use three different numbers and print all three combinations
convertTemperature(25, "C");   // Celsius input
convertTemperature(77, "F");   // Fahrenheit input
convertTemperature(300, "K");  // Kelvin input

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function netPrice(gross, vatGroup) {
  const g = String(vatGroup).toLowerCase();
  let vat;
  if (g === "normal") vat = 25;
  else if (g === "food") vat = 15;
  else if (g === "hotel" || g === "transport" || g === "cinema") vat = 10;
  else {
    printOut("Unknown VAT group!");
    return NaN;
  }

  const net = (100 * gross) / (vat + 100);
  return net;
}

// Calls: one for each VAT group and one unknown
const gross1 = 1250.00;
const net1 = netPrice(gross1, "normal");
printOut("Gross: " + gross1.toFixed(2) + " - group: normal -> Net: " + (Number.isNaN(net1) ? "NaN" : net1.toFixed(2)));

const gross2 = 200.00;
const net2 = netPrice(gross2, "food");
printOut("Gross: " + gross2.toFixed(2) + " - group: food -> Net: " + (Number.isNaN(net2) ? "NaN" : net2.toFixed(2)));

const gross3 = 760.50;
const net3 = netPrice(gross3, "hotel");
printOut("Gross: " + gross3.toFixed(2) + " - group: hotel -> Net: " + (Number.isNaN(net3) ? "NaN" : net3.toFixed(2)));

const gross4 = 500.00;
const net4 = netPrice(gross4, "goblins"); // unknown group
printOut("Gross: " + gross4.toFixed(2) + " - group: goblins -> Net: " + (Number.isNaN(net4) ? "NaN" : net4.toFixed(2)));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function computeMotion(speed, distance, time) {
  const isMissing = v => v === null || v === undefined || Number.isNaN(v);
  const missingCount = [speed, distance, time].filter(isMissing).length;
  if (missingCount > 1) return NaN;

  // All present: return speed (distance / time) for consistency
  if (!isMissing(speed) && !isMissing(distance) && !isMissing(time)) {
    if (time === 0) return NaN;
    return distance / time;
  }

  if (isMissing(speed)) {
    if (time === 0) return NaN;
    return distance / time;
  }

  if (isMissing(distance)) {
    return speed * time;
  }

  // time is missing
  if (isMissing(time)) {
    if (speed === 0) return NaN;
    return distance / speed;
  }

  return NaN;
}

// Examples / tests
printOut("Speed missing -> speed = distance / time : " + computeMotion(undefined, 150, 3));   // 50
printOut("Time missing  -> time  = distance / speed: " + computeMotion(50, 150, undefined));  // 3
printOut("Distance missing -> distance = speed * time: " + computeMotion(50, undefined, 3));  // 150
printOut("Two missing -> NaN: " + computeMotion(undefined, undefined, 3));                    // NaN
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function padText(text, maxSize, char = " ", insertBefore = false) {
  if (typeof text !== "string") text = String(text);
  maxSize = Number(maxSize);
  if (!Number.isFinite(maxSize) || maxSize < 0) return NaN;
  char = String(char) || " ";
  if (text.length >= maxSize) return text;

  const needed = maxSize - text.length;
  const pad = char.repeat(Math.ceil(needed / char.length)).slice(0, needed);
  const result = insertBefore ? pad + text : text + pad;
  return result;
}

// Examples / tests
const a = padText("Hi", 6, "*", false);   // "Hi****"
const b = padText("Hello", 10, "-", true); // "-----Hello"
const c = padText("Exact", 5, ".", false); // "Exact" (unchanged)
printOut(a);
printOut(b);
printOut(c);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathLines(totalLines = 200) {
  let start = 1;
  for (let line = 1; line <= totalLines; line++) {
    const leftCount = line + 1;
    const rightCount = line;

    // compute left sum
    let leftSum = 0;
    const leftNums = [];
    for (let i = 0; i < leftCount; i++) {
      leftNums.push(start + i);
      leftSum += start + i;
    }

    // compute right sum
    const rightStart = start + leftCount;
    let rightSum = 0;
    const rightNums = [];
    for (let i = 0; i < rightCount; i++) {
      rightNums.push(rightStart + i);
      rightSum += rightStart + i;
    }

    if (leftSum !== rightSum) {
      printOut(`Mismatch on line ${line}:`);
      printOut(`  Left  (${leftCount} nums): ${leftNums.join(" + ")} = ${leftSum}`);
      printOut(`  Right (${rightCount} nums): ${rightNums.join(" + ")} = ${rightSum}`);
      return;
    }

    // advance start for next line
    start = rightStart + rightCount;
  }

  printOut("Maths fun!");
}

testMathLines(200);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
  if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Examples: compute and print factorials
const fact5 = factorial(5);
if (Number.isNaN(fact5)) printOut("Invalid input for factorial(5)");
else printOut("Factorial of 5 = " + fact5);

const fact6 = factorial(6);
printOut("Factorial of 6 = " + fact6);

printOut(newLine);