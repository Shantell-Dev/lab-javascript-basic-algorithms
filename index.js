//let hacker1 = "XXXX";
//console.log("The driver's name is", hacker1);

//let hacker2 = "YYYY";
//console.log("The navigator's name is", hacker2);

// Iteration 1: Names and Input
let hacker1 = "John"; 
let hacker2 = "Jane"; 

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if (hacker2Length > hacker1Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops
let hacker1Capitalized = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1Capitalized);

let hacker2Reversed = hacker2.split("").reverse().join("");
console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}







