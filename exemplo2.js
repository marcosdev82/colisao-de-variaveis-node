// moduloB.js
const modA = require("./moduloA");
modA.valor = 20; // Isso altera o valor globalmente!

// app.js
const modA1 = require("./moduloA");
console.log(modA1.valor); // 20 (foi alterado por moduloB.js)

