let subArray1 = prompt("Enter names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise):").split(',');
let subArray2 = prompt("Enter ages separated by commas (e.g., 24,65,21,5,9):").split(',').map(Number);

let restructuredArray = subArray1.map((name, index) => [name.trim(), subArray2[index]]);

console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(subArray => console.log(subArray));
