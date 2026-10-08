//Ejercicios de Javascript

//Ejercicio 2
// Organiza los elementos de la bolsa
// Crea un programa que tenga un arreglo de objetos con los elementos de la bolsa de un jugador
// Cada objeto debe tener un nombre, una cantidad y un tipo de elemento
// Crea una función que divida el arreglo en 3 arreglos diferentes dependiendo del tipo de elemento y que los muestre ordenados por cantidad en consola 
// Muestra el resultado en consola
// Ejemplo de arreglo de objetos:

let backpack = [
  {
    nombre: "Pokeball",
    cantidad: 5,
    tipo: "Normal"
  },
  {
    nombre: "Repel",
    cantidad: 3,
    tipo: "Normal"
  },
  {
    nombre: "SuperRepel",
    cantidad: 8,
    tipo: "Normal"
  },
  {
    nombre: "Quick Attack",
    cantidad: 2,
    tipo: "TM"
  },
  {
    nombre: "Surf",
    cantidad: 3,
    tipo: "TM"
  },
  {
    nombre: "Cut",
    cantidad: 1,
    tipo: "TM"
  },
  {
    nombre: "Soda Pop",
    cantidad: 10,
    tipo: "Consumable"
  },
  {
    nombre: "Rare Candy",
    cantidad: 15,
    tipo: "Consumable"
  },
  {
    nombre: "Master Ball",
    cantidad: 999,
    tipo: "Consumable"
  }
];

console.log(backpack)

function sortBackpackByType(type, subset) {
  return subset.filter(item => item.tipo === type);
}

function sortBackpackByQuantity(subset) {
  return subset.sort((a, b) => b.cantidad - a.cantidad);
}

function sortAllItems() {
  let consumableItems = sortBackpackByType("Consumable", backpack);
  consumableItems = sortBackpackByQuantity(consumableItems);

  let normalItems = sortBackpackByType("Normal", backpack);
  normalItems = sortBackpackByQuantity(normalItems);

  let TmItems = sortBackpackByType("TM", backpack);
  TmItems = sortBackpackByQuantity(TmItems);

  backpack = [...consumableItems, ...normalItems, ...TmItems];
  console.log(backpack);
}

sortAllItems();