const fs = require("fs");

console.log(globalThis === global); //!   In node.js, global is the global object instead of window (in case of browser)

//! ******************************************** OPERATION ON FILES ********************************************

//  Writing to a file
fs.writeFileSync("./text.txt", "Hello node!!!! (1st attempt)");

//  Reading from a file
const text = fs.readFileSync("./text.txt");
console.log(text.toString());

//  Renaming a file
fs.renameSync("./text.txt", "./dummy.txt");

//  Deleting a file
fs.unlinkSync("./dummy.txt");
