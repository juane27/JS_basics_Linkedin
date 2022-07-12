"use strict"

// JSON => JavaScript Object Notation
// En consola persona -> toda la variable
// En consola persona.nombre -> 'Juane'
var persona = {nombre: 'Juane', twitter: '@juane27'};



var personas = [
    {nombre: 'Martin', twitter: 'Martin_2'},
    {nombre: 'Gonzalo', twitter: 'Gonzalo_3'},
    {nombre: 'Federico', twitter: 'Fede_4'},
    persona
]

//Convertir datos a una string
var personaJSON = JSON.stringify(persona);

//Convertir a Json 
var nuevaPersona = JSON.parse(personaJSON)
