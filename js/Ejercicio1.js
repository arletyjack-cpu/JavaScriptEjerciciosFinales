//Ejercicios de Javascript

//Ejercicio 1
// Autocuración con posciones de vida
// Genera un programa que tome encuenta una variable de vida 
// y si esta es menor a 50, se le sumen 30 puntos de vida
// Agrega una variable para controlar el limite inferior para usar pociones y otra variable para controlar el limite superior de vida
// Agrega también una variable para controlar la cantidad de pociones que tiene el jugador
// Usa que se ejecute cada 2 segundos y que baje la vida del jugador en 5 puntos hasta llegar a 0 
// Para esto último vas a necesitar investigar la función setInterval() de Javascript

let health = 100;
let hpPotions = 3;
let lowerLimit = 50;
let upperLimit = 100;
let round = 1;

console.log("Estadisticas iniciales del jugador: ");
console.log("Vida: " + health);
console.log("Pociones de vida: " + hpPotions);
console.log()

function receiveDamage(damage) {
  health -= damage;
  if (health < 0) {
    health = 0;
  }
  console.log("   Daño recibido: " + damage + ", vida actual: " + health)
}

function usePotion() {
  console.log("   Pociones de vida: " + hpPotions); 
  if (hpPotions > 0) {
    health += 30;
    hpPotions--;
    console.log("   Pocion de vida usada, vida actual: " + health)
  }
  else {
    console.log("   No hay mas pociones de vida")
  }
}

const interval = setInterval(() => {
  console.log("");
  console.log("Ronda actual: " + round++);
  receiveDamage(5);
  if (health < lowerLimit) {
    usePotion()
  }
  if (health <= 0) {
    console.log("   El jugador ha muerto");
    clearInterval(interval)
  }
}, 2000);