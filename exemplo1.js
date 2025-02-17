globalVar = "Valor inicial";

function alteraValor() {
    globalVar = "Valor modificado!";
}

console.log(globalVar); // "Valor inicial"
alteraValor();
console.log(globalVar); // "Valor modificado!"
