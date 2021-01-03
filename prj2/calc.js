/*
This is a simple calc that was created to show how to access others .js files and access its functions.

You must put the right path to "require" the folder

If you access the functions, you'll see the following line:

module.exports = functionName();

This is the line that returns the result of the function.

If you want to test other functions, change the Function name at the line 21.
*/

let FuncSoma = require("./operacoes/somar");
let FuncSub = require("./operacoes/subtrair");
let FuncMult = require("./operacoes/multiplicar");
let FuncDiv = require("./operacoes/dividir");

//To test other functions, change the FuncSoma to other FuncName in line 15 to 18.
console.log(FuncSoma(10,2));