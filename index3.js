"use strict";

// Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("¿De que numero quieres la tabla?", 1));

document.write("<h2>Tabla del " + numero + "</h2>");
for (var i = 1; i <= numero; i++) {
    document.write(i + " x " + numero + " = " + i * numero + "<br/>");
}

var numero = parseInt(prompt("¿De que numeros quieres la tablas?", 1));
// Todas las tablas de multiplicar
for (var c = 1; c <= numero; c++) {
    document.write("<h1>Tabla del " + c + "</h1>");
    for (var i = 1; i <= numero; i++) {
        document.write(i + " x " + c + " = " + i * c + "<br/>");
    }
}
document.write("<br/>");