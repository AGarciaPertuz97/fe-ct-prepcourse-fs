/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var arreglo = nombre.split(""); // Primero separo las letras del "string"
   arreglo[0] = arreglo[0].toUpperCase(); // Luego convierto la primera letra en mayúscula con el .toUpperCase
   var nuevoNombre = arreglo.join(""); // Luego las vuelvo a unir y las meto dentro de una nueva variable.
   return nuevoNombre; // Retorno la nueva variable.
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb(); // Asi se invoca/ejecuta un callback
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   suma = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++){
      suma += arrayOfNumbers[i];
   }
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   for (let i = 0; i < array.length; i++){
      cb(array[i])
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var newArray = []; // Creamos el nuevo arreglo donde vamos a meter el resultado devuelto por el callback
   for (i = 0; i < array.length; i++){ // Recorremos el arreglo.
      cb(array[i]); // Indicamos que cada elemento pase a ser un argumento del callback
      newArray.push(cb(array[i])); // Guardamos el resultado devuleto por el callback en cada elemento en nuestro nuevo arreglo.
   }
        return newArray; // Retornamos el nuevo Arreglo.
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   return arrayOfStrings.filter(letra => letra[0] === "a");
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
