//Ejercicios de Javascript

//Ejercicio 3
//Crea un programa que tomando en cuenta las caracteristicas de los pokemones (2)
//Ejecute funciones de ataque y cálculo de daño dependiendo de las estadisticas del pokemon para cálculo de daño
//Ejemplo: Pikachu lanza un ataque que hace 20 de daño, 
// si el pokemon enemigo tiene 50 de vida, al recibir el ataque 
// le quedaran 30 de vida, pero si el pokemon enemigo tiene 10 de defensa, 
// el ataque de Pikachu le hará 10 de daño y le quedarán 40 de vida
// Ejemplo de objeto de pokemon:

let turn = 1

const pikachu = {
  nombre: "Pikachu",
  tipo: "Eléctrico",
  ataque: "Impacto de trueno relampagueante",
  daño: 20,
  vida: 50,
  defensa: 10
};

const oddish = {
  nombre: "Oddish",
  tipo: "Planta",
  ataque: "Latigaso de enredadera",
  daño: 15,
  vida: 70,
  defensa: 15
}

function attack(pokemon, contra) {
    console.log("       " + pokemon.nombre + " ha usado " + pokemon.ataque + "!")
    contra.vida = contra.vida - (pokemon.daño - contra.defensa)
    if (contra.vida < 0) { contra.vida = 0 }
    console.log("       " + contra.nombre + " ahora tiene " + contra.vida + " de vida!")
}

const combat = setInterval(() => {
    console.log("")
    if (turn % 2 === 0) {
        pokemon = oddish
        contra = pikachu
    } else {
        pokemon = pikachu
        contra = oddish
    }
    console.log("Turno " + turn + " - Es el turno de " + pokemon.nombre)
    attack(pokemon, contra)
    if (contra.vida <= 0) {
        console.log("       " + contra.nombre + " ha sido derrotado!")
        clearInterval(combat)
    }

    turn++
}, 500);