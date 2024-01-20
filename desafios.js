//? Desafios

//? 1.Crea una lista vacía llamada "listaGenerica".

const listaGenerica = [];

//? 2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

const lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//? 3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

//? 4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

const elementosLista = () => {
  console.log(lenguagesDeProgramacion);
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
};

elementosLista();

//? 5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

const elemtInversos = () => {
  const elemtReversed = lenguagesDeProgramacion.reverse();
  console.log(elemtReversed);
  for (let i = 0; i < elemtReversed.length; i++) {
    console.log(elemtReversed[i]);
  }
};
elemtInversos();

//? 6.Crea una función que calcule el promedio de los elementos en una lista de números.
const listaNumeros = [20, 10, 30, 50, 15];
const promedioElementos = (listaNumeros) => {
  const cantidad = listaNumeros.length;
  const total = listaNumeros.reduce((acum, num) => acum + num);
  const promedio = total / cantidad;
  return promedio;
};
const media = promedioElementos(listaNumeros);

console.log(`El promedio es: ${media}`);

//? 7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

const numeroMayorMenor = (listaNumeros) => {
  let mayor = listaNumeros[0];
  let menor = listaNumeros[0];
  for (let i = 1; i < listaNumeros.length; i++) {
    if (mayor < listaNumeros[i]) {
      mayor = listaNumeros[i];
    }
    if (menor > listaNumeros[i]) {
      menor = listaNumeros[i];
    }
  }
  console.log(`El número mayor es: ${mayor}, y el número menor es: ${menor}`);
};

numeroMayorMenor(listaNumeros);

//? 8.Crea una función que devuelva la suma de todos los elementos en una lista.

const totalElem = (listaNumeros) => {
  const total = listaNumeros.reduce((acum, num) => acum + num);
  return console.log(`La suma total es: ${total}`);
};
totalElem(listaNumeros);

//? 9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// const indiceNumero = (lista, num) => {
//   const indice = lista.indexOf(num);
//   return console.log(indice);
// };

const indiceDeNumero = (lista, num) => {
  const indice = lista.indexOf(num);
  return indice;
};

const index = indiceDeNumero([5, 8, 3, 2, 15, 24, 13], 24);
console.log(index);

// indiceNumero(listaNumeros, 10);
// indiceNumero(listaNumeros, 50);
// indiceNumero(listaNumeros, 25);

//? 10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

const listaNumeros2 = [8, 5, 15, 30, 16];
// console.log(listaNumeros);
// console.log(listaNumeros2);
const sumaElemDosListas = (listaNumeros, listaNumeros2) => {
  if (listaNumeros.length === listaNumeros2.length) {
    const listaSumada = listaNumeros.map(
      (num, index) => num + listaNumeros2[index]
    );
    console.log(listaSumada);
  } else {
    console.log(`Las listas deben tener la misma cantidad de elementos`);
  }
};
sumaElemDosListas(listaNumeros, listaNumeros2);

//? 11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

const cuadradoNumero = (listaNumeros) => {
  return listaNumeros.map((num) => num * num);
};
// console.log(listaNumeros);
console.log(cuadradoNumero(listaNumeros));
