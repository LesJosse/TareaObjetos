// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const misDatos = {
  nombre: "Jose Luis",
  apellido: "Echeverri",
  edad: 26,
  altura: 1.75,
  isDeveloper: true,
};

//- Una variable que obtenga tu edad a partir del objeto anterior
const edad = misDatos.edad;
console.log(edad);

const lista = [
  misDatos,
  { nombre: "Carlos", apellido: "Torres", edad: 25, altura: 1.76 },
  { nombre: "James", apellido: "Mejía", edad: 24, altura: 1.74 },
];

console.log(lista);

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const orden = lista.sort((a, b) => a.edad + b.edad);
console.log(orden);
