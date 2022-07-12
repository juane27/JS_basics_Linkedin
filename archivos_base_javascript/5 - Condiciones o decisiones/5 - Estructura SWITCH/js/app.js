"use strict"

//********************************
//*** Estructura SWITCH

// Evaluación con números
var edad = 30;
var resultado = "";

switch (edad) {
	//Coincide con el case 10?
    case 10:
		resultado = "La edad es 10 años";
	break;
	//Coincide con el case 20?
	case 20:
		resultado = "La edad es 20 años";
	break;
	//Coincide con el case 30?
    case 30:
		resultado = "La edad es 30 años";
	//Break ignora todo lo debajo
    break;
	//Coincide con el case 40?
    case 40:
		resultado = "La edad es 40 años";
	break;
	//Default en caso de que nada coincida
    default:
    	resultado = "Ningún caso coincide";
    break;
}


console.log("El resultado de la evaluación con números es: "+ resultado)

// Evaluación con cadena de texto
var producto = "Radio";

switch (producto) {
    case "TV":
		resultado = "Se eligió la TV";
	break;
	case "Radio":
		resultado = "Se eligió el Radio ";
	break;
    case "Teléfono":
		resultado = "Se eligió el teléfono ";
	break;
    default:
    	resultado = "No se eligió ningún producto";
    break;
}

console.log("El resultado de la evaluación con texto es: "+ resultado)
